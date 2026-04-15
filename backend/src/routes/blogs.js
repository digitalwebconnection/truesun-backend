const express  = require('express');
const router   = express.Router();
const { handleImageUpload } = require('../middleware/upload');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/controllers');

// ─── Routes ──────────────────────────────────────────────────────────────────
router.get('/',       getAllBlogs);
router.get('/:id',    getBlogById);
router.post('/',      handleImageUpload('truesun/blogs'), createBlog);
router.put('/:id',    handleImageUpload('truesun/blogs'), updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
