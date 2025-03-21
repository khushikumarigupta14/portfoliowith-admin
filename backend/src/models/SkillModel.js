import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Skill name
    proficiency: { type: Number, required: true, min: 1, max: 100 }, // Proficiency percentage
    category: { type: String, required: true }, // e.g., Frontend, Backend, Design
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
