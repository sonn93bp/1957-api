const service = require("../services/about.service");
const { OK } = require("../../lib/utils/constants.utils");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.update(id, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const get = async (_, res, next) => {
  try {
    const response = await service.get();
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  update,
  get,
};
