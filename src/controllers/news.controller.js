const service = require("../services/news.service");
const { CREATED, OK } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await service.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const { newsId } = req.params;
    const response = await service.get(newsId);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { newsId } = req.params;
    const response = await service.update(newsId, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
module.exports = {
  create,
  get,
  update,
};
