const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");
const { google } = require("googleapis");

dotenv.config({
  path: path.join(__dirname, "../../../.env"),
});

const MorganProd = {
  skip(req, res) {
    return res.statusCode <= 400;
  },
  stream: fs.createWriteStream(path.join(__dirname, "../../access.log"), {
    flags: "a",
  }),
};

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8081,
  jwt: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
    jwtRefreshSecret: process.env.JWT_SECRET,
    jwtRefreshExpirationInterval: process.env.JWT_REFRESH_EXPIRATION_MINUTES,
  },
  mongo: {
    uri:
      process.env.NODE_ENV === "dev"
        ? process.env.MONGO_URI_TEST
        : process.env.MONGO_URI,
    options: {
      maxPoolSize: 5,
    },
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  google_drive_config: {
    clientId: process.env.GOOGLE_DRIVE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_DRIVE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_DRIVE_REDIRECT_URI,
    credentials: {
      refresh_token: process.env.GOOGLE_DRIVE_REFRESH_TOKEN,
    },
    google_drive_storage_folder: process.env.GOOGLE_DRIVE_STORAGE_FOLDER,
    google_drive_url_prefix: process.env.GOOGLE_DRIVE_URL_PREFIX,
  },
  rateLimitTime: process.env.RATE_LIMIT_TIME,
  rateLimitRequest: process.env.RATE_LIMIT_REQUEST,
  saltRound: process.env.NODE_ENV === "dev" ? 5 : 10,
  logs: process.env.NODE_ENV === "prod" ? "combined" : "dev",
  Level: process.env.NODE_ENV === "prod" ? "error" : "debug",
  morganConfig: process.env.NODE_ENV === "prod" ? MorganProd : {},
  apiDomain: process.env.API_DOMAIN
};
