const Project              = require('../models/Project');
const Blog                 = require('../models/Blog');
const { cloudinary }       = require('../config/cloudinary');

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Convert a blog title to a URL-friendly slug.
 * e.g. "My Blog Post! #1" → "my-blog-post-1"
 */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // remove non-word chars except hyphens
    .replace(/[\s_]+/g, '-')    // spaces/underscores → hyphens
    .replace(/-+/g, '-');        // collapse consecutive hyphens
}

/**
 * Generate a unique slug for a blog post.
 * Appends a counter suffix if the slug already exists.
 */
async function generateUniqueSlug(title, excludeId = null) {
  const base = slugify(title);
  let slug = base;
  let counter = 1;
  while (true) {
    const query = { slug };
    if (excludeId) query._id = { $ne: excludeId };
    const existing = await Blog.findOne(query);
    if (!existing) break;
    slug = `${base}-${counter++}`;
  }
  return slug;
}

/**
 * Extract Cloudinary public_id from a secure URL so we can delete the old file.
 * e.g. https://res.cloudinary.com/<cloud>/image/upload/v123/truesun/images/abc.jpg
 *      → "truesun/images/abc"
 */
function getPublicId(url) {
  if (!url) return null;
  try {
    const parts   = url.split('/');
    const upload  = parts.indexOf('upload');
    if (upload === -1) return null;
    // Skip version segment (v1234567890) if present
    let start = upload + 1;
    if (/^v\d+$/.test(parts[start])) start++;
    const withExt = parts.slice(start).join('/');
    return withExt.replace(/\.[^/.]+$/, ''); // strip file extension
  } catch {
    return null;
  }
}

/** Destroy a Cloudinary resource by URL (fire-and-forget — never blocks response) */
async function destroyCloudinaryImage(url) {
  const publicId = getPublicId(url);
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.warn('⚠️  Could not delete Cloudinary image:', err.message);
  }
}
// Convert a Cloudinary URL to the backend proxy path used by the frontend
function convertCloudinaryUrl(url) {
  if (!url) return '';
  const cloudinaryDomain = 'res.cloudinary.com';
  if (url.includes(cloudinaryDomain)) {
    const match = url.match(/\/upload\/([^?]+)(\\?.*)?$/);
    if (match) {
      return `/api/blogs/image/${match[1]}`;
    }
  }
  return url;
}

// ─── PROJECT CONTROLLERS ──────────────────────────────────────────────────────

/** GET /api/projects — list all (newest first) */
const getAllProjects = async (_req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }).lean();
    // Cache for 1 hour; stale-while-revalidate for 60 s (browsers + CDN)
    res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=60');
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/projects/:id — single project */
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).lean();
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** POST /api/projects — create project */
const createProject = async (req, res) => {
  try {
    const { body } = req;
    // req.cloudinaryFile is set by handleImageUpload middleware when a file is uploaded
    const imageUrl = req.cloudinaryFile ? req.cloudinaryFile.secure_url : (body.image || '');

    const data = {
      name:         body.name         || '',
      segment:      body.segment      || '',
      location:     body.location     || '',
      description:  body.description  || '',
      image:        imageUrl,
      capacity:     body.capacity     || '',
      roofType:     body.roofType     || '',
      co2Mitigated: body.co2Mitigated || '',
      annualGen:    body.annualGen    || '',
      payback:      body.payback      || '',
      savings:      body.savings      || '',
    };

    const project = await Project.create(data);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/** PUT /api/projects/:id — update project */
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    const { body } = req;

    // If a new image was uploaded, delete the old one from Cloudinary
    if (req.cloudinaryFile) {
      await destroyCloudinaryImage(project.image);
      project.image = req.cloudinaryFile.secure_url;
    } else if (body.image !== undefined) {
      project.image = body.image;
    }

    const scalars = [
      'name', 'segment', 'location', 'description',
      'capacity', 'roofType', 'co2Mitigated', 'annualGen', 'payback', 'savings',
    ];
    scalars.forEach(f => { if (body[f] !== undefined) project[f] = body[f]; });

    await project.save();
    res.json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/** DELETE /api/projects/:id — delete project + Cloudinary image */
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    await destroyCloudinaryImage(project.image);
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── BLOG CONTROLLERS ────────────────────────────────────────────────────────

/** GET /api/blogs — list all (newest first) */
const getAllBlogs = async (_req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=60');
    res.json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/blogs/slug/:slug — single blog by slug */
const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).lean();
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=60');
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/blogs/:id — single blog by MongoDB id (kept for admin use) */
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).lean();
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=60');
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** POST /api/blogs — create blog */
const createBlog = async (req, res) => {
  try {
    const { body } = req;
    const rawUrl = req.cloudinaryFile ? req.cloudinaryFile.secure_url : (body.image || '');
    const imageUrl = convertCloudinaryUrl(rawUrl);

    const title = body.title || '';
    const slug  = await generateUniqueSlug(title);

    let meta = {};
    if (body.meta) {
      try {
        meta = typeof body.meta === 'string' ? JSON.parse(body.meta) : body.meta;
      } catch (e) {
        // ignore parse error
      }
    }

    const data = {
      title,
      slug,
      excerpt:    body.excerpt    || '',
      categories: body.categories || '',
      readTime:   body.readTime   || '',
      date:       body.date       || '',
      content:    body.content    || '',
      image:      imageUrl,
      meta,
    };

    const blog = await Blog.create(data);
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/** PUT /api/blogs/:id — update blog */
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    const { body } = req;

    if (req.cloudinaryFile) {
      await destroyCloudinaryImage(blog.image);
      blog.image = convertCloudinaryUrl(req.cloudinaryFile.secure_url);
    } else if (body.image !== undefined) {
      blog.image = convertCloudinaryUrl(body.image);
    }

    const scalars = ['title', 'excerpt', 'categories', 'readTime', 'date', 'content'];
    scalars.forEach(f => { if (body[f] !== undefined) blog[f] = body[f]; });

    if (body.meta !== undefined) {
      try {
        blog.meta = typeof body.meta === 'string' ? JSON.parse(body.meta) : body.meta;
      } catch (e) {
        // ignore parse error
      }
    }

    // Regenerate slug if title changed
    if (body.title !== undefined) {
      blog.slug = await generateUniqueSlug(body.title, blog._id);
    }

    await blog.save();
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/** DELETE /api/blogs/:id — delete blog + Cloudinary image */
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    await destroyCloudinaryImage(blog.image);
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/blogs/image/* — proxy Cloudinary image through backend */
const getBlogImageProxy = async (req, res) => {
  try {
    const filePath = req.params[0];
    if (!filePath) {
      return res.status(400).send('Image path is required');
    }
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'dyyv00jvc';
    const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${filePath}`;

    const response = await fetch(cloudinaryUrl);
    if (!response.ok) {
      return res.status(response.status).send('Error fetching image from storage');
    }

    const contentType = response.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }
    const cacheControl = response.headers.get('cache-control');
    if (cacheControl) {
      res.setHeader('Cache-Control', cacheControl);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.send(buffer);
  } catch (err) {
    console.error('Error proxying image:', err);
    res.status(500).send('Internal server error');
  }
};

// ─── Exports ──────────────────────────────────────────────────────────────────
module.exports = {
  // Projects
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  // Blogs
  getAllBlogs,
  getBlogBySlug,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogImageProxy,
};

