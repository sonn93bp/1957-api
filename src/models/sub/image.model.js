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
  name: {
    type: String,
    require: true,
  },
  url: {
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
