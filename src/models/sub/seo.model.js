const { Schema } = require("mongoose");

module.exports.SeoSchema = new Schema({
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
