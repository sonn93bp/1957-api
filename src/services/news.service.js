const News = require("./../models/news.model");

const get = async (id) => {
  const result = await News.findById({ _id: id });
  return result;
};

const create = async (insertNews) => {
  const news = new News(insertNews);
  const result = await news.save();
  return result;
};

const update = async (id, modifyNews) => {
  const filter = { _id: id };
  const news = News.updateOne(filter, modifyNews);
  return news;
};
module.exports = {
  get,
  create,
  update,
};
