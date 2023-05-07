// Express JWT middleware for authenticating requests
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

exports.authenticateJwt = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log('/backend/utils/auth.js --- authenticateJwt(); decoded: ',decoded), '\n' ;
    //console.log(token);
    console.log('/backend/utils/auth.js --- authenticateJwt(); token: ',token);
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

exports.generateToken = (user) => {
  const payload = {
    userId: user.id,
    username: user.username,
    role: user.role,
  };
  console.log('/backend/utils/auth.js --- generateToken(); payload:',payload);
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });
};


