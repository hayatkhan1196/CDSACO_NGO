const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["programs", "projects", "news", "reports", "gallery", "partners", "team"] },
  title: { type: String, required: true, trim: true },
  slug: { type: String, trim: true, lowercase: true },
  summary: { type: String, default: "" },
  body: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  images: [{ type: String }],
  fileUrl: { type: String, default: "" },
  category: { type: String, default: "" },
  location: { type: String, default: "" },
  date: { type: Date },
  status: { type: String, enum: ["draft", "published", "active", "archived"], default: "draft" },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

contentSchema.index({ type: 1, slug: 1 }, { unique: true, sparse: true });
contentSchema.index({ type: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model("Content", contentSchema);
