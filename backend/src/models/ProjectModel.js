import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }], // Array of tech used
    image: { type: String, required: true }, // URL for the project image
    liveDemo: { type: String }, // Link to the live project
    githubRepo: { type: String }, // Link to GitHub repo
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
