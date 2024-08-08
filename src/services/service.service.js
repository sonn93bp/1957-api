const Service = require("../models/service.model");

const getAll = async () => {
  const result = await Service.find();
  return result;
};

const getOne = async (id) => {
  const result = await Service.findById({ _id: id });
  return result;
};

const create = async (body) => {
  const service = new Service(body);
  const result = await service.save();
  return result;
};

const update = async (id, body) => {
  const filter = { _id: id };
  const service = Service.updateOne(filter, body);
  return service;
};

const getBySlug = async (slug) => {
  const service = await Service.findOne({ slug: slug });
  return service;
};

const deleteById = async (id) => {
  const result = await Service.deleteOne({
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
