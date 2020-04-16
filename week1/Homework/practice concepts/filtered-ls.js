"use strict"
const fs = require("fs");
const path = require("path");
let file = process.argv[2];


fs.readdir(file, (err, list) => {
    if (err) {
        console.log(err);
        return;
    }
    let fileList = list.filter(item => path.extname(item) === `.${process.argv[3]}`);
    fileList.forEach(file => console.log(file));
});
