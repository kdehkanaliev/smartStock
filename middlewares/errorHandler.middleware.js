let handler = (err, req, res, next) => {
  try {
    res.json({
      succes: "Failed",
      message: err.message,
    });
    next();
  } catch (error) {
    next(error);
  }
};

export default handler;
