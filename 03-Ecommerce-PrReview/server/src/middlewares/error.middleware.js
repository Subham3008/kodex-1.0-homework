let errorMiddleware = (err, req, res, next) => {
  console.log("Api error from Api middleware", err);
  let statusCode = err.statusCode || 500
  let message = err.message || "Internal server error."
  return res.status(statusCode).json({
    message: message
  })

}

module.exports = errorMiddleware
