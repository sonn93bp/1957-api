const { Status } = require("../../../lib/utils/enum/status.enum");

module.exports = (param) => {
  return {
    basicFilter: !!param ? {} : {
        status: {$eq: Status.Active}
    },
    basicIgnoreSelect: !!param ? {} : {
        created_at: 0,
        update_at: 0
    }
  };
};
