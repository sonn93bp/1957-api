const Project = require("../models/project.model");

const getAll = async () => {
  const result = await Project.find();
  return result;
};

const getOne = async (id) => {
  const result = await Project.findById({ _id: id });
  return result;
};

const create = async (body) => {
  const project = new Project(body);
  const result = await project.save();
  return result;
};

const update = async (id, body) => {
  const filter = { _id: id };
  const project = Project.updateOne(filter, body);
  return project;
};

const getBySlug = async (slug) => {
  const project = await Project.findOne({ slug: slug });
  return project;
};

const deleteById = async (id) => {
  const result = await Project.deleteOne({
    _id: id,
  });
  return result;
};
module.exports = {
  getAll,
  getOne,
  create,
  update,
  getBySlug,
  deleteById,
};
