const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure:     true,   // always use https URLs
});

// Verify connection at startup (non-fatal — only warns, doesn't exit)
const verifyCloudinary = async () => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    console.warn('⚠️   CLOUDINARY_CLOUD_NAME is not set in .env — image uploads will fail');
    return;
  }
  try {
    const result = await cloudinary.api.ping();
    if (result && result.status === 'ok') {
      console.log(`✅  Cloudinary connected  (cloud: ${cloudName})`);
    }
  } catch (err) {
    const msg = err?.message || err?.error?.message || JSON.stringify(err);
    console.error(`❌  Cloudinary error (cloud: "${cloudName}"): ${msg}`);
    console.error('    → Go to https://console.cloudinary.com and copy your cloud name, API key, and secret');
  }
};

module.exports = { cloudinary, verifyCloudinary };