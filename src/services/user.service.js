const User = require("./../models/user.model");
const logger = require("../../lib/config/logger.config");

const findByEmail = async (email) => {
  const result = await User.findOne({ email: email });
  return result;
};

const create = async (userData) => {
  try {
    const user = new User(userData);
    const result = await user.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  findByEmail,
  create,
};
