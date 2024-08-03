const { Schema, model } = require("mongoose");

var seoSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  alt: {
    type: String,
    require: true,
  },
  keyword: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

var productSchema = new Schema({
  seo: seoSchema,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: [String],
    require: true,
  },
  image: {
    type: [String],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    require: true,
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

module.exports = model("Product", productSchema);
