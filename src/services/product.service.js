const Product = require("./../models/product.model");
const query = require("./queries/filter.query");

const getAll = async (param) => {
  const pipeline = query({
    model: "products",
    ...param,
  });
  const result = await Product.aggregate(pipeline.aggregate);
  return result;
};

const getOne = async (id) => {
  const result = await Product.findById({ _id: id });
  return result;
};

const create = async (body) => {
  const product = new Product(body);
  const result = await product.save();
  return result;
};

const update = async (id, body) => {
  const filter = { _id: id };
  const product = Product.updateOne(filter, body);
  return product;
};

const getBySlug = async (slug) => {
  const product = await Product.findOne({ slug: slug });
  return product;
};

const deleteById = async (id) => {
  const result = await Product.deleteOne({
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
