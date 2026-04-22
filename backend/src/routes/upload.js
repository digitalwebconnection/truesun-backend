const express = require('express');
const router = express.Router();
const { handleImageUpload } = require('../middleware/upload');

router.post('/', handleImageUpload('truesun/editor'), (req, res) => {
  if (req.cloudinaryFile) {
    return res.json({
      success: true,
      url: req.cloudinaryFile.secure_url,
    });
  }
  res.status(400).json({ success: false, message: 'Upload failed' });
});

module.exports = router;
