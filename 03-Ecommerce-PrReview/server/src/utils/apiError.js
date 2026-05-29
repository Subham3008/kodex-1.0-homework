//-----create a custom ApiError class
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message)

    this.statusCode = statusCode

  }
}

module.exports = ApiError