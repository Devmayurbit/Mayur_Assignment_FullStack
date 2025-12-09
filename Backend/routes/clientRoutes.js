import express from "express";
import Client from "../models/Client.js";

const router = express.Router();

// GET all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// POST create client
router.post("/", async (req, res) => {
  try {
    const { imageUrl, name, designation, description } = req.body;
    const client = await Client.create({
      imageUrl,
      name,
      designation,
      description
    });
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

// DELETE client
router.delete("/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch {
    res.status(400).json({ message: "Error deleting" });
  }
});

export default router;
