import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    profileImage: { type: String, required: true }, // URL for the profile image
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
      portfolio: { type: String },
    },
  },
  { timestamps: true }
);

const About = mongoose.model("About", aboutSchema);

export default About;
