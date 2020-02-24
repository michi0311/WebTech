let cfg = require('./config.json')
const jwt = require('jsonwebtoken');
const getDb = require("./db").getDb;

// verify token using cfg.auth.jwt_key
module.exports = (req, res, next) => {
    const db = getDb();
    let token = req.headers.authorization;

    //TODO EX2: verify token validity via MySQL request
    next(); // call on success

};
