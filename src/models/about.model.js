const { Schema, model } = require("mongoose");

var aboutSchema = new Schema({
  content: {
    type: String,
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

module.exports = model("About", aboutSchema);
