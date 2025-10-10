const app = require("./app");
const config = require("./config/index");
const connectDB = require("./config/database");

connectDB();
const port = config.port;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
