class AppError extends Error {
  constructor(mname, essage, explanation, statusCode = 500) {
    super()
    this.name = mname
    this.explanation = explanation
    this.message = message || "An unexpected error occurred"
    this.statusCode = statusCode
    // Indicates that this error is expected and can be handled
  }
}

module.exports = AppError
