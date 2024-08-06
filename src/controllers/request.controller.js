const requestService = require("../services/request.service");
const { CREATED, OK } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await requestService.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const response = await requestService.getOne(requestId);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const response = await requestService.getAll();
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const response = await requestService.update(requestId, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const response = await requestService.deleteById(requestId);
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
  deleteById,
};
