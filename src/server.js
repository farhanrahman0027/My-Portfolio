const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/myPortfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Mongoose Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// POST API Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message saved!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
