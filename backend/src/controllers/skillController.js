import Skill from "../models/SkillModel.js";

export const getSkills = async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
};

export const addSkill = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  const skill = await Skill.create(req.body);
  res.json(skill);
};

export const updateSkill = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(skill);
};

export const deleteSkill = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Skill deleted" });
};
// export {deleteSkill,updateSkill,addSkill,getSkills}
