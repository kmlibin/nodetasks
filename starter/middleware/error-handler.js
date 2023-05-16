const { CustomError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  
  if (err instanceof CustomError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something is up" });
};

module.exports = errorHandlerMiddleware;
