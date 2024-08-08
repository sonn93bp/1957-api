const About = require("./../models/about.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await About.findOne();
  return result;
};

const create = async (body) => {
  try {
    const about = new About(body);
    const result = await about.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

const update = async (body) => {
  try {
    const filter = { _id: id };
    const result = About.updateOne(filter, body);
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
