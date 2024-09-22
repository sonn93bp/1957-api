const Joi = require("joi");
module.exports = {
  logIn: {
    body: Joi.object({
      email: Joi.string().email().required().messages({
        'string.email': 'Please enter a valid email address.',
        'any.required': 'Email is required.'
      }),
      password: Joi.string().min(6).max(128).required().messages({
        'string.min': 'Password must be at least 8 characters long.',
        'string.max': 'Password cannot exceed 128 characters.',
        'any.required': 'Password is required.'
      }),
    }),
  },
  refreshToken: {
    body: Joi.object({
      refresh_token: Joi.string().required(),
    }),
  },
};
