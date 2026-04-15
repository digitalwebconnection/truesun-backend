const express  = require('express');
const router   = express.Router();
const { handleImageUpload } = require('../middleware/upload');
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/controllers');

// ─── Routes ──────────────────────────────────────────────────────────────────
router.get('/',       getAllProjects);
router.get('/:id',    getProjectById);
router.post('/',      handleImageUpload('truesun/projects'), createProject);
router.put('/:id',    handleImageUpload('truesun/projects'), updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
