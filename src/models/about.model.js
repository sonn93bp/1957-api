const { Schema, model } = require("mongoose");
const { HidenJsonField } = require("../../lib/mongoose.hiden.plugin");
const { SeoSchema } = require("./sub/seo.model");
const { Status } = require("../../lib/utils/enum/status.enum");

var aboutSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  status: {
    type: Number,
    enum: Object.values(Status),
    default: Status.Pending,
  },
  content: {
    type: String,
  },
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
aboutSchema.plugin(HidenJsonField);
module.exports = model("About", aboutSchema);
