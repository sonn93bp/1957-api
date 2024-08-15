const service = require("../services/policy.service");
const { CREATED, OK } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await service.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getOne(id);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { level } = req.query;
    const response = await service.getAll(level);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.update(id, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
const getBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const response = await service.getBySlug(slug);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.deleteById(id);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  create,
  getOne,
  getAll,
  update,
  getBySlug,
  deleteById,
};
