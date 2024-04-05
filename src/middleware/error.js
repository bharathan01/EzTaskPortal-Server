const error = (error, req, res, next) => {
  const success = false;
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error.";

  res.status(statusCode).json({success,statusCode,message});
};

module.exports = error;
