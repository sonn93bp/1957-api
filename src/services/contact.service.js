const Contact = require("../models/contact.model");
const logger = require("../../lib/config/logger.config");
const get = async () => {
  const result = await Contact.findOne();
  return result;
};

const create = async (body) => {
  try {
    const contact = new Contact(body);
    const result = await contact.save();
    return result;
  } catch (err) {
    logger.error(err);
  }
};

const update = async (id, body) => {
  const filter = { _id: id };
  const contact = Contact.updateOne(filter, body);
  return contact;
};
module.exports = {
  get,
  create,
  update,
};
