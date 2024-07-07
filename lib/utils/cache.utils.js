const { TTGet, TTSet } = require("../config/redis.config");

const generateKey = (path, code, param) => `API-${path}-${code}-${param}`;

exports.SetCache = async (data, path, code, param) => {
  const key = generateKey(path, code, param);
  const rez = await TTSet(key, 3600, JSON.stringify(data));
  return rez === "OK";
};

exports.GetCache = async (path, code, param) => {
  const key = generateKey(path, code, param);
  const data = await TTGet(key);
  return JSON.parse(data);
};
