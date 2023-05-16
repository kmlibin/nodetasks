const asyncWrapper = (fn) => {
  //passes these down to the function in the controller...takes the controller function as an argument
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
        //pass error to next set of middleware
      next(error);
    }
  };
};

module.exports = asyncWrapper;
