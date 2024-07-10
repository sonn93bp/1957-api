const userService = require("../services/user.service");
const { CREATED } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await userService.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const findByEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const response = await userService.findByEmail(email);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  findByEmail,
};
