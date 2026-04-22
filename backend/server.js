require('dotenv').config();

const express               = require('express');
const cors                  = require('cors');
const connectDB             = require('./src/config/db');
const { verifyCloudinary }  = require('./src/config/cloudinary');
const projectsRouter        = require('./src/routes/projects');
const blogsRouter           = require('./src/routes/blogs');
const uploadRouter          = require('./src/routes/upload');

// ─── App ──────────────────────────────────────────────────────────────────────
const app  = express();
const PORT = process.env.PORT || 5000;

// ─── CORS ─────────────────────────────────────────────────────────────────────
// Allow the Vercel frontend + local dev; add any extra origins to the array
const allowedOrigins = [
  process.env.FRONTEND_URL   || 'http://localhost:5173',
  process.env.FRONTEND_URL_2 || 'https://truesun.vercel.app',   // optional second origin (e.g. custom domain)
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    // Allow server-to-server / curl requests (no Origin header) and whitelisted origins
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error(`CORS: origin "${origin}" is not allowed`));
  },
  credentials: true,
}));

// ─── Body Parsers ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/projects', projectsRouter);
app.use('/api/blogs',    blogsRouter);
app.use('/api/upload',   uploadRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    success:   true,
    message:   'TrueSun API is running',
    timestamp: new Date(),
    env:       process.env.NODE_ENV || 'development',
  });
});

// 404 fallback for unknown API routes
app.use('/api/*', (_req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

// ─── Global Error Handler ────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('💥  Unhandled error:', err.message);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Internal server error' });
});

// ─── Startup ──────────────────────────────────────────────────────────────────
const start = async () => {
  await connectDB();        // MongoDB
  await verifyCloudinary(); // Cloudinary ping

  if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`\n🚀  TrueSun Backend   →  http://localhost:${PORT}`);
      console.log(`🩺  Health check      →  http://localhost:${PORT}/api/health\n`);
    });
  }
};

start();

// Export for Vercel serverless
module.exports = app;
