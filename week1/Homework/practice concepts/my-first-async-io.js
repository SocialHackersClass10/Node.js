"use strict"
const fs = require("fs");

fs.readFile((process.argv[2]), "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let lines = data.split("\n").length - 1;
    console.log(lines);
})
