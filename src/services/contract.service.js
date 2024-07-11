const Contract = require("./../models/contract.model");
const logger = require("../../lib/config/logger.config");

const get = async () => {
  const result = await Contract.find();
  return result;
};

const create = async (insertContract) => {
  try {
    const contract = new Contract(insertContract);
    const result = await contract.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

const update = async (id, modifyContract) => {
  const filter = { _id: id };
  const contract = Contract.updateOne(filter, modifyContract);
  return contract;
};
module.exports = {
  get,
  create,
  update,
};
