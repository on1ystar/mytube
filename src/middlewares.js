export const middleLocals = (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.user = req.session.user;
  next();
};
