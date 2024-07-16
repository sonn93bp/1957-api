const { BAD_REQUEST } = require("./../utils/constants.utils");
const APIError = require("./api.error");

class BadRequestError extends APIError {
  /**
   * Creates an API error.
   * @param {String} message - Error message.
   */
  constructor(message) {
    super({
      message: message,
      status: BAD_REQUEST,
    });
  }
}

module.exports = BadRequestError;
