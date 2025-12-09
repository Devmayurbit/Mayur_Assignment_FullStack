import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true }, // client photo link
    name: { type: String, required: true },
    designation: { type: String, required: true }, // e.g. CEO, Designer
    description: { type: String, required: true }  // feedback text
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);
