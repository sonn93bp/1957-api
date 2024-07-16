const bcrypt = require("bcryptjs");
const { saltRound } = require("./../config/env.config");

const pwdBcrypt = async (password) => {
  const hash = await bcrypt.hash(password, Number(saltRound));
  return hash;
};

const compare = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  compare,
  pwdBcrypt,
};
