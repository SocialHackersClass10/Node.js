
const fs = require("fs");
const path = require("path");

function filterFiles(dir, ext, callback) {
    fs.readdir(dir, (err, data) => {
        if (err) {
            return callback(err);
        }
        let filteredData = data.filter(item => {
            path.extname(item) === `.${process.argv[3]}`;
            callback(null, filteredData);
        })
    })
}
module.exports = filterFiles;

