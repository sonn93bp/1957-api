const productService = require("../services/product.service");
const { CREATED, OK } = require("../../lib/utils/constants.utils");

const create = async (req, res, next) => {
  try {
    const response = await productService.create(req.body);
    return res.status(CREATED).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const response = await productService.getOne(productId);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const response = await productService.getAll();
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const response = await productService.update(productId, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
module.exports = {
  create,
  getOne,
  getAll,
  update,
};
