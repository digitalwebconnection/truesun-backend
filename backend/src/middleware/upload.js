const multer     = require('multer');
const streamifier = require('streamifier');
const { cloudinary } = require('../config/cloudinary');

// ─── Memory Storage ───────────────────────────────────────────────────────────
// Files are buffered in RAM, then streamed to Cloudinary — never written to disk.
const storage = multer.memoryStorage();

const fileFilter = (_req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp|svg/;
  if (allowed.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed (jpg, png, gif, webp, svg)'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

// ─── Cloudinary Upload Helper ─────────────────────────────────────────────────
/**
 * Upload a buffer to Cloudinary and return the result.
 * @param {Buffer} buffer   - file buffer from multer memoryStorage
 * @param {string} folder   - Cloudinary folder (e.g. 'truesun/images')
 * @returns {Promise<object>} Cloudinary upload result (contains .secure_url, .public_id etc.)
 */
const uploadToCloudinary = (buffer, folder = 'truesun/images') => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        transformation: [{ quality: 'auto', fetch_format: 'auto' }],
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// ─── Express Middleware: parse + upload ──────────────────────────────────────
/**
 * Returns an Express middleware that:
 * 1. Parses the multipart form with multer (field name = 'image')
 * 2. If a file was attached, streams it to Cloudinary
 * 3. Sets req.cloudinaryFile = { secure_url, public_id, ... } for controllers
 */
const handleImageUpload = (folder = 'truesun/images') => [
  upload.single('image'),
  async (req, res, next) => {
    if (!req.file) return next(); // no image attached — skip
    try {
      const result     = await uploadToCloudinary(req.file.buffer, folder);
      req.cloudinaryFile = result; // attach result so controller can read it
      next();
    } catch (err) {
      res.status(500).json({ success: false, message: `Cloudinary upload failed: ${err.message}` });
    }
  },
];

module.exports = { upload, uploadToCloudinary, handleImageUpload };