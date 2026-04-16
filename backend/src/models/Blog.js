const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title:      { type: String, required: true },
    slug:       { type: String, unique: true, sparse: true }, // SEO-friendly URL slug (sparse = ignore nulls in unique index)
    excerpt:    { type: String, default: '' },
    categories: { type: String, default: '' }, // Comma separated or single
    readTime:   { type: String, default: '' },
    date:       { type: String, default: '' },
    image:      { type: String, default: '' },
    content:    { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);
