const express = require("express");
const ContactMessage = require("../models/ContactMessage");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject = "", message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ message: "Name, email and message are required" });
    const saved = await ContactMessage.create({ name, email, subject, message });
    res.status(201).json({ message: "Message received", id: saved._id });
  } catch {
    res.status(400).json({ message: "Could not send message" });
  }
});

router.get("/", requireAuth, async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(300);
  res.json({ messages });
});

module.exports = router;
