const { Schema, model } = require("mongoose");

var sliderSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
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
