const News = require("./../models/news.model");
const query = require("./queries/filter.query");

const getAll = async (param) => {
  const pipeline = query({
    model: "news",
    ...param,
  });
  const result = await News.aggregate(pipeline.aggregate);
  return result;
};

const getOne = async (id) => {
  const result = await News.findById({ _id: id });
  return result;
};

const create = async (body) => {
  const news = new News(body);
  const result = await news.save();
  return result;
};

const update = async (id, body) => {
  const filter = { _id: id };
  const news = News.updateOne(filter, body);
  return news;
};

const getBySlug = async (slug) => {
  const news = await News.findOne({ slug: slug });
  return news;
};

const deleteById = async (id) => {
  const result = await News.deleteOne({
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
