const Joi = require("joi");
module.exports = {
  changePwd: {
    body: Joi.object({
      old_password: Joi.string().min(6).max(128).required().messages({
        'string.min': 'Old Password must be at least 8 characters long.',
        'string.max': 'Old Password cannot exceed 128 characters.',
        'any.required': 'Old Password is required.'
      }),
      new_password: Joi.string().min(6).max(128).required().messages({
        'string.min': 'New Password must be at least 8 characters long.',
        'string.max': 'New Password cannot exceed 128 characters.',
        'any.required': 'New Password is required.'
      }),
      repeat_password: Joi.any().valid(Joi.ref('new_password')).required().messages({
        'any.only': 'Passwords do not match.', 
        'any.required': 'Repeat password is required.',
      }),
    }),
  },
};
