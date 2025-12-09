import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST create project
router.post("/", async (req, res) => {
  try {
    const { imageUrl, name, description } = req.body;
    const project = await Project.create({ imageUrl, name, description });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

// DELETE project
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting" });
  }
});

export default router;
