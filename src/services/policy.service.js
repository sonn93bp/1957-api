const Policy = require("../models/policy.model");

const getAll = async () => {
  const result = await Policy.find();
  return result;
};

const getOne = async (id) => {
  const result = await Policy.findById({ _id: id });
  return result;
};

const create = async (body) => {
  const product = new Policy(body);
  const result = await product.save();
  return result;
};

const update = async (id, body) => {
  const filter = { _id: id };
  const product = Policy.updateOne(filter, body);
  return product;
};

const getBySlug = async (slug) => {
  const product = await Policy.findOne({ slug: slug });
  return product;
};

const deleteById = async (id) => {
  const result = await Policy.deleteOne({
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
