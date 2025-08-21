const { StatusCodes } = require("http-status-codes")
class ServiceError extends Error {
  constructor(
    message = "An error occurred in the service",
    explanation = "Service error",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super()
    this.name = "ServiceError"
    this.explanation = explanation
    this.statusCode = statusCode
  }
}

module.exports = ServiceError
