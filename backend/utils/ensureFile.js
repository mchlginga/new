const path = require("path");
const fs = require("fs");

const ensureFileExist = (filename) => {
    const dir = path.dirname(filename);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

module.exports = ensureFileExist;
