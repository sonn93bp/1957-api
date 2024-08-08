const contactService = require("../services/contact.service");
const { OK } = require("../../lib/utils/constants.utils");

const get = async (_, res, next) => {
  try {
    const response = await contactService.get();
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await contactService.update(id, req.body);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
module.exports = {
  get,
  update,
};
