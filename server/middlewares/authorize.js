const authorize =
  (...roles) =>
  (req, res, next) => {
    const { user } = req;
    console.log(user, '================')
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!roles.includes(user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };

module.exports = authorize;
