const jwt = require("jsonwebtoken");

const config = require("../config/index");

const generateToken = (id) => {
    return jwt.sign({ id }, config.jwtSecret, {
        expiresIn: config.jwtExpiresIn,
    });
};

module.exports = generateToken;
