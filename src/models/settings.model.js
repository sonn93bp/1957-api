const { Schema, model } = require("mongoose");
const { HidenJsonField } = require("../../lib/mongoose.hiden.plugin");
const { SeoSchema } = require("./sub/seo.model");
const { SoccialDetailSchema } = require("./sub/soccial.detail.model");

var settingSchema = new Schema({
  oaid_zalo: {
    type: String,
  },
  website: {
    type: String,
  },
  fanpage: {
    type: String,
  },
  google_iframe: {
    type: String,
  },
  google_analytics: {
    type: String,
  },
  body_js: {
    type: String,
  },
  seo: SeoSchema,
  soccials: [SoccialDetailSchema],
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
settingSchema.plugin(HidenJsonField);
module.exports = model("Setting", settingSchema);
