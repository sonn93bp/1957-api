const { Schema } = require("mongoose");

const ExcludedFields = (schema, ret) => {
  Object.entries(schema.tree).map(([key, value]) => {
    if (value instanceof Array) {
      ret[key].map((child) => ExcludedFields(value[0], child));
    } else if (value instanceof Schema) {
      ExcludedFields(value, ret);
    } else if (value.hiden) {
      delete ret[key];
    }
  });
};

module.exports.HidenJsonField = (schema, options) => {
  schema.set("toJSON", {
    transform: function (doc, ret, options) {
      ExcludedFields(schema, ret);
      return ret;
    },
  });
};
