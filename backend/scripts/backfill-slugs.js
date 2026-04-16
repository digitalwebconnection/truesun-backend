/**
 * One-time migration script: backfill slugs for existing blogs that don't have one.
 * Run with: node backend/scripts/backfill-slugs.js
 */
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Blog = require('../src/models/Blog');

const connectDB = require('../src/config/db');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

async function generateUniqueSlug(title, excludeId) {
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

async function main() {
  await connectDB();

  const blogs = await Blog.find({ $or: [{ slug: { $exists: false } }, { slug: '' }, { slug: null }] });
  console.log(`Found ${blogs.length} blog(s) without a slug.`);

  for (const blog of blogs) {
    const slug = await generateUniqueSlug(blog.title, blog._id);
    blog.slug = slug;
    await blog.save();
    console.log(`  → "${blog.title}"  ==>  slug: "${slug}"`);
  }

  console.log('✅ Backfill complete!');
  await mongoose.disconnect();
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
