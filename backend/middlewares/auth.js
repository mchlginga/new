const jwt = require("jsonwebtoken");
const { statusCodes } = require("../utils/constant");
const config = require("../config/index");
const User = require("../models/user");

exports.protect = async (req, res, next) => {
    try {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        } else if (req.cookies.token) {
            token = req.cookies.token;
        }

        if (!token) {
            return res.status(statusCodes.UNAUTHORIZED).json({
                message: "Not authorized, no token.",
            });
        }

        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res
                .status(statusCodes.UNAUTHORIZED)
                .json({ message: "User not found." });
        }

        next();
    } catch (error) {
        next(error);
    }
};
