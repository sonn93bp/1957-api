const contractService = require("../services/contract.service");
const { CREATED, OK } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await contractService.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const response = await contractService.get();
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { contractId } = req.params;
    const response = await contractService.update(contractId, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
module.exports = {
  create,
  get,
  update,
};
