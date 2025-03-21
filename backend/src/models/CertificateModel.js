import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: String,
    institution: String,
    date: Date,
    certificateUrl: String,
  },
  { timestamps: true }
);

const Certificate = mongoose.model("Certificate", certificateSchema);
export default Certificate;
