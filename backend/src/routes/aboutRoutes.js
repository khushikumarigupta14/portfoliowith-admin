import express from "express";
import { getAbout, updateAbout } from "../controllers/aboutController.js";
import protect from "../middleware/authMiddleware.js";

const aboutRoutes = express.Router();

aboutRoutes.get("/", getAbout);
aboutRoutes.put("/:id", protect, updateAbout);

export default aboutRoutes;
