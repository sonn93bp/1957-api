const RateLimiter = require("express-rate-limit");
const { RateLimitHandler } = require("../middleware/error.middleware");
const {
  env,
  rateLimitRequest,
  rateLimitTime,
} = require("../config/env.config");

module.exports = () => {
  if (env === "prod") {
    return RateLimiter({
      windowMs: rateLimitTime * 60 * 1000, // 15 minutes
      max: rateLimitRequest, // limit each IP to 30 requests per windowMs
      delayMs: 0,
      handler: RateLimitHandler,
    });
  }
  return RateLimiter({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3000, // limit each IP to 3000 requests per windowMs
    delayMs: 0,
    handler: RateLimitHandler,
  });
};
