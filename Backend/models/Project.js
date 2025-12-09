import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true }, // image link
    name: { type: String, required: true },     // project name
    description: { type: String, required: true } // short text
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
