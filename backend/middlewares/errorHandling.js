const { statusCodes } = require("../utils/constant");

const errorHandling = (error, req, res, next) => {
    console.error("Error caught on middleware:", error.stack);

    res.status(error.statusCode || statusCodes.SERVER_ERROR).json({
        message: `Caught an error: ${error.message}`,
    });
};

module.exports = errorHandling;
