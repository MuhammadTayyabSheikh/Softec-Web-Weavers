const { decodeToken } = require('../utils/token');

const decodeAccessToken = () => (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next();
  }

  try {
    const decodedToken = decodeToken(token);

    req.user = decodedToken;

    return next();
  } catch (error) {
    return next();
  }
};

module.exports = decodeAccessToken;
