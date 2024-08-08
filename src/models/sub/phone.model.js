const { Schema } = require("mongoose");

module.exports.PhoneSchema = new Schema({
  number: {
    type: String,
  },
  owner: {
    type: String,
  },
});
