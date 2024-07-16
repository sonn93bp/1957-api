const User = require("./../models/user.model");
const logger = require("../../lib/config/logger.config");
const NotFoundError = require("../../lib/errors/notfound.error");
const { pwdBcrypt } = require("./../../lib/utils/bcrypt.utils");

const findByEmail = async (email) => {
  const result = await User.findOne({ email: email });
  console.log(result);
  console.log(!result);
  if (!result) throw new NotFoundError({ objectName: "Email" });
  return result;
};

const create = async (userData) => {
  try {
    userData.password = await pwdBcrypt(userData.password);
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
