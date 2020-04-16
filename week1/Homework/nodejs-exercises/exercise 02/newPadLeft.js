"use strict";
const leftPad = require("left-pad");

//Random tests
console.log(leftPad(Math.floor(Math.random() * 50), 4, "0"));
console.log(leftPad(Math.floor(Math.random() * 50), 6, "0"));
console.log(leftPad(Math.floor(Math.random() * 50), 8, "0"));