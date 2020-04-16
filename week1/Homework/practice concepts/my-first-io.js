"use strict"
const fs = require("fs");
let content = fs.readFileSync(process.argv[2]).toString();
let lines = content.split("\n").length - 1;
console.log(lines);