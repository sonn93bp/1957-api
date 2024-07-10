const http = require("http");
const app = require("./lib/config/express.config");
const { env, port } = require("./lib/config/env.config");
const { MongooseConnect } = require("./lib/config/mongoose.config");
const logger = require("./lib/config/logger.config");
const passport = require("./src/auth/passport.auth");

// Enable authentication
app.use(passport.initialize());

const server = http.createServer(app);
const jwt = require("jsonwebtoken");
server.listen(port);

server.on("listening", () => {
  MongooseConnect();
  logger.info(`${env.toUpperCase()} Server is Listening on PORT ${port}`);
  const token = jwt.sign(
    {
      email: "darius@gmail.com",
    },
    "G8342ltj55bMzlP3YfQdZWlL56E1de7t",
    { expiresIn: "1h" }
  );
  logger.info(token);
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
