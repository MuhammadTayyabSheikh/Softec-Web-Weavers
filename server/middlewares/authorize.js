const authorize =
  (...roles) =>
    (req, res, next) => {
      const { user } = req;
      if (!user) {
        console.log(user, '================')
        return res.status(401).json({ message: 'Unauthorized' });
      }
      console.log(user, 'roles$$$$$$$$$$$$$$')
      if (roles.length && !roles.includes(user.role)) {
        console.log(user, roles, 'Forbidden!!!!!!!!!!!!!')
        return res.status(403).json({ message: 'Forbidden' });
      }

      next();
    };

module.exports = authorize;
