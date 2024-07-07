const http = require("http");
const app = require("./lib/config/express.config");
const { env, port } = require("./lib/config/env.config");
const { MongooseConnect } = require("./lib/config/mongoose.config");
const logger = require("./lib/config/logger.config");
const passport = require("./src/common/auth/passport.auth");

const server = http.createServer(app);
server.listen(port);

// Enable authentication
app.use(passport.initialize());

server.on("listening", () => {
  // MongooseConnect();
  logger.info(`${env.toUpperCase()} Server is Listening on PORT ${port}`);
});

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case "EACCES":
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
server.on("error", onError);

module.exports = server;
