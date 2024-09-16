const Setting = require("./../models/settings.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await Setting.findOne();
  return result;
};

const create = async (body) => {
  try {
    const setting = new Setting(body);
    const result = await setting.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

const update = async (id, body) => {
  try {
    const filter = { _id: id };
    const result = Setting.updateOne(filter, body);
    return result;
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  get,
  create,
  update,
};
