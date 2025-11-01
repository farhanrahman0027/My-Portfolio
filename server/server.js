import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import mongoose from "mongoose";
// Load environment variables
dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());


// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const visitSchema = new mongoose.Schema({
  ip: String,
  timestamp: { type: Date, default: Date.now },
});

const Visit = mongoose.model("Visit", visitSchema);

// 🟢 Route to increment and return visitor count
app.post("/api/visit", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  await Visit.create({ ip });
  const count = await Visit.countDocuments();
  res.json({ count });
});

app.get("/api/visits", async (req, res) => {
  const count = await Visit.countDocuments();
  res.json({ count });
});


app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Must match Gmail user
    to: "farhanrahman0027@gmail.com",
    subject: subject || `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject || "No Subject"}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
