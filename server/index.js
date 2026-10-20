import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import contactEmail from "./templates/contactEmail.js";
import contactSchema from "./schemas/contactSchema.js";
import { z } from "zod";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


app.post("/api/contact", contactLimiter, async (req, res) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Validation failed",
      errors: z.flattenError(result.error).fieldErrors,
    });
  }

  const { name, email, phone, subject, message } = result.data;

  try {

await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: process.env.CONTACT_EMAIL,
  replyTo: email,
  subject: "New Contact Message",

  text: [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(phone?.trim() ? [`Phone: ${phone}`] : []),
    ...(subject?.trim() ? [`Subject: ${subject}`] : []),
    "",
    "Message:",
    message,
  ].join("\n"),

  html: contactEmail({
    name,
    email,
    phone,
    subject,
    message,
  }),
});

    return res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error.message);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
