const { ValidationError } = require("express-validation");
const APIError = require("../utils/apierror.utils");
const { env } = require("../config/env.config");
const {
  NOT_FOUND,
  BAD_REQUEST,
  TOO_MANY_REQUESTS,
} = require("../utils/constants.utils");

/**
 * Error Handler Sends Stack Trace only during Development Environment
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {next} next
 */
const Handler = (err, req, res, next) => {
  const response = {
    code: err.status,
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  };
  if (env === "prod") delete response.stack;
  res.status(response.code).json(response);
  res.end();
};

exports.ErrorHandler = Handler;
exports.Handler = Handler;

/**
 * Convert Error Thrown By Express Validator OR Not an Instance of API Error
 * @public
 */
exports.ConvertError = (err, req, res, next) => {
  let ConvertedError = err;
  if (err instanceof ValidationError) {
    const errors = err.errors.map((e) => ({
      location: e.location,
      messages: e.messages[0].replace(/[^\w\s]/gi, ""),
      field: e.field[0],
    }));
    ConvertedError = new APIError({
      message: "Validation Error",
      status: err.status || BAD_REQUEST,
      errors,
    });
  } else if (!(err instanceof APIError)) {
    ConvertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  }
  return Handler(ConvertedError, req, res, next);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.NotFound = (req, res, next) => {
  const err = new APIError({
    message: "Resource Not Found",
    status: NOT_FOUND,
  });
  return Handler(err, req, res, next);
};

/**
 * Catch 429 ratelimit exceeded
 * @public
 */
exports.RateLimitHandler = (req, res, next) => {
  const err = new APIError({
    message: "Rate limt exceeded, please try again later some time.",
    status: TOO_MANY_REQUESTS,
  });
  return Handler(err, req, res, next);
};
