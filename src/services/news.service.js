const { Types } = require("mongoose");
const News = require("./../models/news.model");
const BadRequestError = require("../../lib/errors/badrequest.error");
const NotFoundError = require("../../lib/errors/notfound.error");

const get = async (id) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError("ID not format");
  }
  const result = await News.findById({ _id: id });
  if (!result) throw new NotFoundError({ objectName: "News" });
  return result;
};

const create = async (insertNews) => {
  const news = new News(insertNews);
  const result = await news.save();
  return result;
};

const update = async (id, modifyNews) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError("ID not format");
  }
  const filter = { _id: id };
  const news = News.updateOne(filter, modifyNews);
  if (!news) throw new NotFoundError({ objectName: "News" });
  return news;
};
module.exports = {
  get,
  create,
  update,
};
