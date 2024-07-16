const jwt = require("jsonwebtoken");
const moment = require("moment");
const {
  jwt: {
    jwtExpirationInterval,
    jwtRefreshExpirationInterval,
    jwtSecret,
    jwtRefreshSecret,
  },
} = require("./../config/env.config");

const generateJwtToken = (user) => {
  const jwt_payload = {
    exp: moment().add(jwtExpirationInterval, "minutes").unix(),
    iat: moment().unix(),
    email: user.email,
  };
  return jwt.sign(jwt_payload, jwtSecret);
};

const generateJwtRefreshToken = (user) => {
  const jwt_payload = {
    exp: moment().add(jwtRefreshExpirationInterval, "minutes").unix(),
    iat: moment().unix(),
    email: user.email,
  };
  return jwt.sign(jwt_payload, jwtRefreshSecret);
};

const jwtVerify = (token, callback) => {
  jwt.verify(token, jwtRefreshSecret, callback);
};

module.exports = {
  generateJwtToken,
  jwtVerify,
  generateJwtRefreshToken,
};
