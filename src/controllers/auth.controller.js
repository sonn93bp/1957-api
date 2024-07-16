const authService = require("./../services/auth.service");
const { OK } = require("../../lib/utils/constants.utils");

const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const response = await authService.logIn(email, password);
    console.log(response);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const logOut = (req, res, next) => {
  const { email, password } = req.user;
  try {
    var response = authService.logIn(email, password);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

const refeshToken = (req, res, next) => {
  const { refresh_token } = req.body;
  try {
    var response = authService.refeshToken(refresh_token);
    return res.status(OK).json({ data: response, success: "SUCCESS" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  logIn,
  refeshToken,
  logOut,
};
