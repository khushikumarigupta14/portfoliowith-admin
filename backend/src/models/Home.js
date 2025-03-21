import mongoose from "mongoose";
const homeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Home", homeSchema);
