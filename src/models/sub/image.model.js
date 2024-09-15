const { Schema } = require("mongoose");

module.exports.ImageSchema = new Schema({
  uid: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: "Done",
  },
  filename: {
    type: String,
    require: true,
  },
  path: {
    type: String,
    require: true,
  },
  originalname: {
    type: String,
  },
  mimetype: {
    type: String,
  },
});
