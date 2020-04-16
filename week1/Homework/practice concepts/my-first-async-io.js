"use strict"
const fs = require("fs");
let file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let lines = data.split('\n').length - 1
    console.log(lines);
})

