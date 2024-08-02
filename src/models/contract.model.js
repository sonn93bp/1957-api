const { Schema, model } = require("mongoose");
const { HidenJsonField } = require("../../lib/mongoose.hiden.plugin");

var addressSchema = new Schema({
  address: {
    type: String,
  },
  phone: {
    type: [String],
    required: true,
  },
  open: {
    type: String,
  },
  close: {
    type: String,
  },
});

var contractSchema = new Schema({
  hotline: {
    type: String,
    required: true,
    hiden: true,
  },
  address_list: [addressSchema],
  email: {
    type: [String],
    required: true,
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
contractSchema.plugin(HidenJsonField);
module.exports = model("Contract", contractSchema);
