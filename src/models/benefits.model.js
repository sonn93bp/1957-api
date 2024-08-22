const { Schema, model } = require("mongoose");
const { SeoSchema } = require("./sub/seo.model");
const { ImageSchema } = require("./sub/image.model");

var benefitSchema = new Schema({
  content: {
    type: String,
  },
  advantages: [
    {
      content: {
        type: String,
      },
      img_source: ImageSchema,
    },
  ],
  seo: SeoSchema,
  created_at: {
    type: Date,
    default: Date.now,
    hiden: true,
  },
  update_at: {
    type: Date,
    default: Date.now,
    hiden: true,
  },
});
module.exports = model("Benefit", benefitSchema);
