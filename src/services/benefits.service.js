const Benefit = require("../models/benefits.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await Benefit.findOne();
  return result;
};

const create = async (body) => {
  try {
    const benefits = new Benefit(body);
    const result = await benefits.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

const update = async (id, body) => {
  try {
    const filter = { _id: id };
    const result = Benefit.updateOne(filter, body);
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
