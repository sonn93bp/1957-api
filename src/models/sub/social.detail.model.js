const { Schema } = require("mongoose");
const { ImageSchema } = require("./image.model");
const { Status } = require("../../../lib/utils/enum/status.enum");

module.exports.SocialDetailSchema = new Schema({
  index: {
      type: Number,
      default: 1,
  },
  name: {
    type: String,
  },
  image_url: ImageSchema,
  link: {
    type: String,
  },
  status: {
    type: Number,
    enum: Object.values(Status),
    default: Status.Pending,
  },
  script: {
    type: String,
  },
});
