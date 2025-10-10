const mongoose = require("mongoose");
const config = require("./index");

const connectDB = async () => {
    try {
        console.log("Trying to connect to:", config.mongoUri);
        const conn = await mongoose.connect(config.mongoUri);

        console.log("MongoDB connected to:", conn.connection.name);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
