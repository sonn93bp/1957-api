const Feedback = require("../models/feedback.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await Feedback.find();
  return result;
};

const create = async (data) => {
  try {
    const feedback = new Feedback(data);
    const result = await feedback.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};
const deleteById = async (id) => {
  const result = await Feedback.deleteOne({
    _id: id,
  });
  return result;
};

const update = async (id, body) => {
  const filter = { _id: id };
  const result = Feedback.updateOne(filter, body);
  return result;
};

const getOne = async (id) => {
  const result = await Feedback.findById({ _id: id });
  return result;
};

module.exports = {
  get,
  create,
  deleteById,
  update,
  getOne,
};
