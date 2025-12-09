import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// Subscribe
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      // Already subscribed, no error
      return res.status(200).json(existing);
    }

    const sub = await Subscriber.create({ email });
    res.status(201).json(sub);
  } catch (err) {
    res.status(400).json({ message: "Invalid email", error: err.message });
  }
});

// Get all subscribers (admin)
router.get("/", async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
