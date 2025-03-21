import express from "express";
import {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import protect from "../middleware/authMiddleware.js";

const projectRoutes = express.Router();

projectRoutes.get("/", getProjects); // Public
projectRoutes.get("/:id", getProjectById); // Public
projectRoutes.post("/", protect, addProject); // Admin only
projectRoutes.put("/:id", protect, updateProject); // Admin only
projectRoutes.delete("/:id", protect, deleteProject); // Admin only

export default projectRoutes;
