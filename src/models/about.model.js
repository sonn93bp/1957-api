const { Schema, model } = require("mongoose");

var aboutSchema = new Schema({
  company: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = model("About", aboutSchema);
