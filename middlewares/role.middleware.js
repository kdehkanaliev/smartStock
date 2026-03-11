let role = (roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role))
        throw new Error("Sizga kirishga ruhsat yoq");
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default role;
