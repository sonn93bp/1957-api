const User = require("./../models/user.model");
const logger = require("../../lib/config/logger.config");
const NotFoundError = require("../../lib/errors/notfound.error");
const { pwdBcrypt, compare } = require("./../../lib/utils/bcrypt.utils");
const { userMapper } = require("./mappers/model.mappers");
const APIError = require("../../lib/errors/api.error");
const { BAD_REQUEST } = require("../../lib/utils/constants.utils");

const findByEmail = async (email) => {
  const result = await User.findOne({ email: email });
  if (!result) throw new NotFoundError({ objectName: "Email" });
  return result;
};

const create = async (userData) => {
  try {
    userData.password = await pwdBcrypt(userData.password);
    const user = new User(userData, userMapper.default);
    const result = await user.save();
    delete result.password;
    return result;
  } catch (err) {
    logger.error(err);
  }
};

const getInfo = async (email) => {
  try {
    const info = await User.findOne({ email: email }, userMapper.info);
    return info;
  } catch (err) {
    logger.error(err);
  }
};

const updatePwd = async (id, body) => {
  const filter = { _id: id };
  const {new_password, old_password } = body;
  const user = await User.findOne(filter);
    if (!user) {
      throw new NotFoundError({ objectName: "User" })
    }
    const isMatch = await compare(old_password, user.password)
    if (!isMatch) {
      throw new APIError({
        message: "Incorrect old password",
        status: BAD_REQUEST
      })
    }
  try {
    user.password = await pwdBcrypt(new_password);
    return User.updateOne(filter, user);
  } catch (err) {
    throw new NotFoundError({ objectName: "User" })
  }
}

module.exports = {
  findByEmail,
  create,
  getInfo,
  updatePwd,
};
