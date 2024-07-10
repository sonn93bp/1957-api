const aboutService = require("../services/about.service");
const { CREATED } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await aboutService.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const response = await aboutService.get();
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  get,
};
