const express = require("express");
const slugify = (value) => String(value || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const Content = require("../models/Content");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();
const TYPES = ["programs", "projects", "news", "reports", "gallery", "partners", "team"];

router.get("/:type", async (req, res) => {
  try {
    const { type } = req.params;
    if (!TYPES.includes(type)) return res.status(404).json({ message: "Unknown content type" });
    const filter = { type };
    if (req.query.all !== "true") filter.status = { $in: ["published", "active"] };
    const items = await Content.find(filter).sort({ featured: -1, order: 1, createdAt: -1 }).limit(200);
    res.json({ items });
  } catch {
    res.status(500).json({ message: "Could not load content" });
  }
});

router.post("/:type", requireAuth, async (req, res) => {
  try {
    const { type } = req.params;
    if (!TYPES.includes(type)) return res.status(404).json({ message: "Unknown content type" });
    const data = { ...req.body, type };
    if (!data.title || !String(data.title).trim()) return res.status(400).json({ message: "Title is required" });
    data.slug = data.slug ? slugify(data.slug) : slugify(data.title);
    const item = await Content.create(data);
    res.status(201).json({ item });
  } catch (error) {
    res.status(error.code === 11000 ? 409 : 400).json({ message: error.code === 11000 ? "Slug already exists for this content type" : "Could not create item" });
  }
});

router.put("/:type/:id", requireAuth, async (req, res) => {
  try {
    const { type, id } = req.params;
    if (!TYPES.includes(type)) return res.status(404).json({ message: "Unknown content type" });
    const data = { ...req.body, type };
    if (data.slug || data.title) data.slug = slugify(data.slug || data.title);
    const item = await Content.findOneAndUpdate({ _id: id, type }, data, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ item });
  } catch {
    res.status(400).json({ message: "Could not update item" });
  }
});

router.delete("/:type/:id", requireAuth, async (req, res) => {
  try {
    const { type, id } = req.params;
    if (!TYPES.includes(type)) return res.status(404).json({ message: "Unknown content type" });
    const item = await Content.findOneAndDelete({ _id: id, type });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Deleted" });
  } catch {
    res.status(400).json({ message: "Could not delete item" });
  }
});

module.exports = router;
