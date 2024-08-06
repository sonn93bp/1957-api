const { Schema, model } = require("mongoose");
const { ImageSchema } = require("./sub/image.model");

var sliderSchema = new Schema({
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
  index: {
    type: Number,
    default: 1,
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
