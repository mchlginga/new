const path = require("path");

const statusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

const PATHS = {
    logFile: path.join(__dirname, "..", "data", "access.log"),
    profileDir: path.join(__dirname, "..", "data", "uploads", "profiles"),
    certDir: path.join(__dirname, "..", "data", "uploads", "certificates"),
};

module.exports = { statusCodes, PATHS };
