const Slider = require("../models/slider.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await Slider.find();
  return result;
};

const create = async (sliderData) => {
  try {
    const slider = new Slider(sliderData);
    const result = await slider.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  get,
  create,
};
