const { Schema, model } = require("mongoose");
const { HidenJsonField } = require("../../lib/mongoose.hiden.plugin");

var aboutSchema = new Schema({
  content: {
    type: String,
  },
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
