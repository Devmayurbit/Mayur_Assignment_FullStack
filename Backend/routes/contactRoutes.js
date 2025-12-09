import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Create contact (user submits form)
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

// Get all contacts (admin)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
