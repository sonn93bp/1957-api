const { Schema, model } = require("mongoose");
const { ImageSchema } = require("./sub/image.model");
const { Status } = require("../../lib/utils/enum/status.enum");

var sliderSchema = new Schema({
  index: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    required: true,
  },
  image_url: ImageSchema,
  active: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
  },
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

module.exports = model("Slider", sliderSchema);
