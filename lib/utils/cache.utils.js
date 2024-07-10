const redis = require("../config/redis.config");

const generateKey = (path, code, param) => `API-${path}-${code}-${param}`;

const setCache = async (data, path, code, param) => {
  const key = generateKey(path, code, param);
  const rez = await redis.set(key, JSON.stringify(data), "EX", 3600);
  return rez === "OK";
};

const getCache = async (path, code, param) => {
  const key = generateKey(path, code, param);
  const data = await redis.get(key);
  return JSON.parse(data);
};

module.exports = {
  setCache,
  getCache,
};
