require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

async function main() {
  if (!process.env.MONGO_URI || !process.env.JWT_SECRET) throw new Error("Set MONGO_URI and JWT_SECRET in .env");
  await mongoose.connect(process.env.MONGO_URI);
  const email = (process.env.ADMIN_EMAIL || "admin@example.com").toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.findOneAndUpdate(
    { email },
    { name: process.env.ADMIN_NAME || "Website Administrator", email, passwordHash, role: "admin", active: true },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  console.log(`Admin ready: ${user.email}`);
  await mongoose.disconnect();
}
main().catch((error) => { console.error(error.message); process.exit(1); });
