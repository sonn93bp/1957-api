const { Schema } = require("mongoose");

module.exports.ImageSchema = new Schema({
  img_google_drive_id: {
    type: String,
    require: true,
  },
  uri: {
    type: String,
    require: true,
  },
});
