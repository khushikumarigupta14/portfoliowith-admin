import Project from "../models/ProjectModel.js";

// Get all projects (Public)
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get single project (Public)
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add new project (Admin only)
export const addProject = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update project (Admin only)
export const updateProject = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete project (Admin only)
export const deleteProject = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
