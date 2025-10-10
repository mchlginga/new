const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const ensureFile = require("./utils/ensureFile");
const { PATHS, statusCodes } = require("./utils/constant");
const errorHandling = require("./middlewares/errorHandling");
const config = require("./config/index");

const { auth } = require("./routes/index");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// cross origin resource sharing
app.use(
    cors({
        origin: config.frontendUrl,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
        exposedHeaders: ["Set-Cookie"],
    })
);

// access logs
ensureFile(PATHS.logFile);
const accessLogStream = fs.createWriteStream(path.join(PATHS.logFile), {
    flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/api/auth", auth);

app.use((req, res) => {
    return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "Invalid route." });
});

app.use(errorHandling);

module.exports = app;
