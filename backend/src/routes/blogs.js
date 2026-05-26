const express  = require('express');
const router   = express.Router();
const { handleImageUpload } = require('../middleware/upload');
const {
  getAllBlogs,
  getBlogBySlug,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogImageProxy,
} = require('../controllers/controllers');

// ─── Routes ──────────────────────────────────────────────────────────────────
router.get('/',              getAllBlogs);
router.get('/slug/:slug',    getBlogBySlug);   // must be BEFORE /:id
router.get('/image/*',       getBlogImageProxy); // must be BEFORE /:id
router.get('/:id',           getBlogById);
router.post('/',             handleImageUpload('truesun/blogs'), createBlog);
router.put('/:id',           handleImageUpload('truesun/blogs'), updateBlog);
router.delete('/:id',        deleteBlog);

module.exports = router;
