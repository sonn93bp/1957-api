const Slider = require("../models/slider.model");
const logger = require("../../lib/config/logger.config");
const query = require("./queries/basic.query");

const get = async (user) => {
  const basic = query(user);
  const result = await Slider.find(basic.basicFilter)
  .select(basic.basicIgnoreSelect);
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
  const result = Slider.updateOne(filter, body);
  return result;
};

const getOne = async (id) => {
  const result = await Slider.findById({ _id: id });
  return result;
};

module.exports = {
  get,
  create,
  deleteById,
  update,
  getOne,
};
