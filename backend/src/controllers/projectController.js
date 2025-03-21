import Project from "../models/ProjectModel.js";

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const addProject = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  const project = await Project.create(req.body);
  res.json(project);
};

export const updateProject = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(project);
};

export const deleteProject = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};
export {deleteProject,updateProject,addProject,getProjects}