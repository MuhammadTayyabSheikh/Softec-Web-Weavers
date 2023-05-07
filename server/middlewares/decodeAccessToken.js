const { decodeToken } = require('../utils/token');

const decodeAccessToken = () => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token, '((((((((((((((((((((((')
  if (!token) {
    return next();
  }

  try {
    const decodedToken = decodeToken(token);
    console.log(decodedToken, 'deeeeeeeeeeeeeeee')
    req.user = decodedToken;
    console.log(req.user, 'req.user@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    return next();
  } catch (error) {
    return next();
  }
};

module.exports = decodeAccessToken;
