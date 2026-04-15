const Project              = require('../models/Project');
const Blog                 = require('../models/Blog');
const { cloudinary }       = require('../config/cloudinary');

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

// ─── PROJECT CONTROLLERS ──────────────────────────────────────────────────────

/** GET /api/projects — list all (newest first) */
const getAllProjects = async (_req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/projects/:id — single project */
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
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
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** GET /api/blogs/:id — single blog */
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/** POST /api/blogs — create blog */
const createBlog = async (req, res) => {
  try {
    const { body } = req;
    const imageUrl = req.cloudinaryFile ? req.cloudinaryFile.secure_url : (body.image || '');

    const data = {
      title:      body.title      || '',
      excerpt:    body.excerpt    || '',
      categories: body.categories || '',
      readTime:   body.readTime   || '',
      date:       body.date       || '',
      content:    body.content    || '',
      image:      imageUrl,
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
      blog.image = req.cloudinaryFile.secure_url;
    } else if (body.image !== undefined) {
      blog.image = body.image;
    }

    const scalars = ['title', 'excerpt', 'categories', 'readTime', 'date', 'content'];
    scalars.forEach(f => { if (body[f] !== undefined) blog[f] = body[f]; });

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
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
