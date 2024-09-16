const { Schema, model } = require("mongoose");
const { HidenJsonField } = require("../../lib/mongoose.hiden.plugin");
const { AddressSchema } = require("./sub/address.model");

var contactSchema = new Schema({
  hotline: {
    type: String,
  },
  address_list: [AddressSchema],
  email: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
    hiden: true,
  },
  update_at: {
    type: Date,
    default: Date.now,
    hiden: true,
  },
});
contactSchema.plugin(HidenJsonField);
module.exports = model("Contact", contactSchema);
