const { Redis } = require("ioredis");
const logger = require("./logger.config");

const {
  redis: { host, port },
} = require("./env.config");

const redis = new Redis({
  url: `redis://${host}:${port}`,
});

redis.on("connect", () => logger.info("Redis Server is Running"));

redis.on("error", (err) =>
  logger.error(`Error Connecting to Redis Server ${err}`)
);

module.exports = redis;
