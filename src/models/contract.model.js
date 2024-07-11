const { Schema, model } = require("mongoose");

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
  },
  address: [addressSchema],
  email: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Contract", contractSchema);
