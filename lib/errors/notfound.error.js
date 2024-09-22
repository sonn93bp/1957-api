const { NOT_FOUND } = require("./../utils/constants.utils");
const APIError = require("./api.error");
const util = require("util");
const { MSG_NOT_FOUND } = require("./message.error");

class NotFoundError extends APIError {
  /**
   * Creates an API error.
   * @param {String} message - Error message.
   */
  constructor(message, objectName) {
    super({
      message: !message ? message : util.format(MSG_NOT_FOUND, objectName),
      status: NOT_FOUND,
    });
  }
}

module.exports = NotFoundError;
