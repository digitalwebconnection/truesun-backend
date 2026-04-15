const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    // ── Core ──────────────────────────────────
    name:        { type: String, default: '' },
    segment:     { type: String, default: '' },
    location:    { type: String, default: '' },
    description: { type: String, default: '' },

    // ── Images (stored as /uploads/<filename>) ─
    image:       { type: String, default: '' },

    // ── Technical ─────────────────────────────
    capacity:         { type: String, default: '' },
    roofType:         { type: String, default: '' },

    // ── Performance ───────────────────────────
    co2Mitigated: { type: String, default: '' },
    annualGen:    { type: String, default: '' },
    payback:      { type: String, default: '' },
    savings:      { type: String, default: '' },


  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
