const { Schema } = require("mongoose");
const { PhoneSchema } = require("./phone.model");

module.exports.AddressSchema = new Schema({
  address: {
    type: String,
  },
  phone: [PhoneSchema],
  open: {
    type: String,
  },
  close: {
    type: String,
  },
});
