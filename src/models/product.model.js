const { Schema, model } = require("mongoose");
const { ImageSchema } = require("./sub/image.model");

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
  schema: {
    type: String,
    require: true,
  },
});

var productSchema = new Schema({
  seo: seoSchema,
  link: {
    type: String,
    required: true,
  },
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
  image: [ImageSchema],
  content: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    require: true,
    unique: true,
  },
  index: {
    type: Number,
    default: 1,
  },
  status: {
    type: Number,
    default: 0,
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
