const fs = require("fs")

module.exports = dirPath => {
    const files = fs.readdirSync(dirPath);

    const arrayOfFiles = [];

    files.forEach(function (file) {
        arrayOfFiles.push(file)
    });

    return arrayOfFiles;
};
