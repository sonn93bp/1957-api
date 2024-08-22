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
const deleteById = async (id) => {
  const result = await Slider.deleteOne({
    _id: id,
  });
  return result;
};

const update = async (id, body) => {
  const filter = { _id: id };
  const service = Slider.updateOne(filter, body);
  return service;
};

const getOne = async (id) => {
  const result = await Service.findById({ _id: id });
  return result;
};

module.exports = {
  get,
  create,
  deleteById,
  update,
  getOne,
};
