const { Schema, model } = require("mongoose");

var userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = model("User", userSchema);
