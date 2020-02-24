let cfg = require('./config.json')
const jwt = require('jsonwebtoken');

// EX1 TODO:
// - verify token using cfg.auth.jwt_key
// - set req.userData.userID to the user id stored in the token's payload
module.exports = (req, res, next) => {
    return res.status(401).json({message: "Authentication failed"}); // TODO: replace with your code
};
