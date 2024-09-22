const service = require("../services/user.service");
const { CREATED, OK } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await service.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const getInfo = async (req, res, next) => {
  try {
    const { email } = req.user;
    const response = await service.getInfo(email);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const updatePwd = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.updatePwd(id, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  create,
  getInfo,
  updatePwd,
};
