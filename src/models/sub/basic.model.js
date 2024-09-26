const { Schema } = require("mongoose");
const { ImageSchema } = require("./image.model");

module.exports.BasicSchema = new Schema({
  favicon: ImageSchema,
  logo: ImageSchema,
  description: {
    type: String,
  },
});
