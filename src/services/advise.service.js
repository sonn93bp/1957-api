const Advise = require("./../models/advise.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await Advise.findOne();
  return result;
};

const create = async (body) => {
  try {
    const advise = new Advise(body);
    const result = await advise.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

const update = async (id, body) => {
  try {
    const filter = { _id: id };
    const result = Advise.updateOne(filter, body);
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
