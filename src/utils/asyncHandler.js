// promise method //

const asyncHandler = (reqHandler) => {
  return (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((error) =>
      console.error("Failed To Execute", error)
    );
  };
};

export { asyncHandler };

// Async Await method //

/*
 const asyncHandler = (func) => {
  async (req, res, next) => {
    try {
      await func(req, res, next);
     } catch (error) {
       res.status(error.code || 500).json({
         success: false,
         message: error.message,
       });
    }
  };
  
}*/
