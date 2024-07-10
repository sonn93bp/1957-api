const About = require("./../models/about.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await About.find();
  return result;
};

const create = async (aboutData) => {
  try {
    const about = new About(aboutData);
    const result = await about.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  get,
  create,
};
