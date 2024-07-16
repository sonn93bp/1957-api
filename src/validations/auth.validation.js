const Joi = require("joi");
module.exports = {
  logIn: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(128).required(),
    }),
  },
  refreshToken: {
    body: Joi.object({
      refresh_token: Joi.string().required(),
    }),
  },
};
