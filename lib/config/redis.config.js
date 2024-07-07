const { createClient } = require("redis");
const { promisify } = require("util");
const { redisUrl } = require("./env.config");

const client = createClient({
  url: redisUrl,
});

client.on("connect", () => logger.info("Redis Server is Running"));

client.on("error", (err) =>
  logger.error(`Error Connecting to Redis Server ${err}`)
);

exports.TTGet = promisify(client.get).bind(client);

exports.TTSet = promisify(client.set).bind(client);

exports.RedisClient = () => client;
