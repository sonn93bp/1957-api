const Request = require("../models/request.model");

const getAll = async (level) => {
  const filter = { parent: { $exists: !!level } };
  const result = await Request.find(filter);
  return result;
};

const getOne = async (id) => {
  const result = await Request.findById({ _id: id });
  return result;
};

const create = async (insertRequest) => {
  const request = new Request(insertRequest);
  const result = await request.save();
  return result;
};

const update = async (id, modifyRequest) => {
  const filter = { _id: id };
  const request = Request.updateOne(filter, modifyRequest);
  return request;
};

const deleteById = async (id) => {
  const result = await Request.deleteOne({
    _id: id,
  });
  return result;
};
module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteById,
};
