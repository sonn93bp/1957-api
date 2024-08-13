const { Schema, model } = require("mongoose");
const { ImageSchema } = require("./sub/image.model");
const { Status } = require("../../lib/utils/enum/status.enum");
const { SeoSchema } = require("./sub/seo.model");

var productSchema = new Schema({
  index: {
    type: Number,
    default: 1,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    require: false,
  },
  slug: {
    type: String,
    require: true,
    unique: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [ImageSchema],
  colors: {
    type: [String],
    require: true,
  },
  content: {
    type: String,
    required: true,
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

module.exports = model("Product", productSchema);
