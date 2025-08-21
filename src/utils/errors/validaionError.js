const { StatusCodes } = require("http-status-codes")
class ValidationError extends Error {
  constructor(error) {
    const explanation = []
    error.errors.forEach((err) => {
      explanation.push(err.message)
    })
    super()
    this.statusCode = statusCode || 400 // Default to 400 Bad Request
    this.name = "ValidationError"
    this.message = "Not able to validate the input"
    this.explanation = explanation
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = ValidationError
