const jwt = require('jsonwebtoken');

const decodeToken = () => (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded.user;

    next();
  });
};

module.exports = decodeToken;
