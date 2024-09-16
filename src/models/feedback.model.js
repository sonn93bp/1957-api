const { Schema, model } = require("mongoose");
const { ImageSchema } = require("./sub/image.model");
const { Status } = require("../../lib/utils/enum/status.enum");
const { SeoSchema } = require("./sub/seo.model");

var feedbackSchema = new Schema({
  index: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    required: true,
  },
  image_url: ImageSchema,
  description: {
    type: String,
  },
  seo: SeoSchema,
  status: {
    type: Number,
    enum: Object.values(Status),
    default: Status.Deactive,
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

module.exports = model("Feedback", feedbackSchema);