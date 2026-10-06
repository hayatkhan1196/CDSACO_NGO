require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:3000";
app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "NGO Website API" }));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/content", require("./routes/content"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/upload", require("./routes/upload"));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Unexpected server error" });
});

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`)))
  .catch((error) => {
    console.error("Could not start API:", error.message);
    process.exit(1);
  });
