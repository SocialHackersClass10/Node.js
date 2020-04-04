"use strict"
const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err);
        return;
    }
    let filtered = list.filter(file => path.extname(file) === `.${process.argv[3]}`)
    filtered.forEach(file => console.log(file));
});

