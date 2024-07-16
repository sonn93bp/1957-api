const mongoose = require("mongoose");
const logger = require("./logger.config");
const {
  env,
  mongo: { uri, options },
} = require("./env.config");

mongoose.Promise = global.Promise;

mongoose.set("debug", env === "dev");

mongoose.connection.on("error", (err) => {
  logger.error(`MongoDB Connection Error ${err}`);
});

mongoose.connection.on("connected", () => {
  logger.info("Connected To DB");
});

/**
 * Connect to mongo db
 * @returns {object} Mongoose connection
 * @public
 */
exports.MongooseConnect = () => {
  mongoose.connect(uri, options);
  return mongoose.connection;
};
