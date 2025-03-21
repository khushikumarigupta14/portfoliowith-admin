import express from "express";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";
import protect from "../middleware/authMiddleware.js";

const skillRoutes = express.Router();

skillRoutes.get("/", getSkills);
skillRoutes.post("/", protect, addSkill);
skillRoutes.put("/:id", protect, updateSkill);
skillRoutes.delete("/:id", protect, deleteSkill);

export default skillRoutes;
