const fs = require("fs");

const ensureDirExist = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

module.exports = ensureDirExist;
