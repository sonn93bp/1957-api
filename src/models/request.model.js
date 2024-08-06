const { Schema, model } = require("mongoose");

var requestSchema = new Schema({
  index: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  note: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model("Request", requestSchema);
