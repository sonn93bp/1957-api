const Product = require("./../models/product.model");

const getAll = async () => {
  const result = await Product.find();
  return result;
};

const getOne = async (id) => {
  const result = await Product.findById({ _id: id });
  return result;
};

const create = async (insertProduct) => {
  const product = new Product(insertProduct);
  const result = await product.save();
  return result;
};

const update = async (id, modifyProduct) => {
  const filter = { _id: id };
  const product = Product.updateOne(filter, modifyProduct);
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
