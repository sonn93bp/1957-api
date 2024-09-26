const { Schema, model } = require("mongoose");
const { Status } = require("../../lib/utils/enum/status.enum");

var requestSchema = new Schema({
  index: {
    type: Number,
    default: 1,
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
  status: {
    type: Number,
    enum: Object.values(Status),
    default: Status.Pending,
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
