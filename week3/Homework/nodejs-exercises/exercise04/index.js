"use strict"
const hbs = require("handlebars");
const template = hbs.compile("{{subjects}} is great to {{punchlines}}");

let subjects = [
    "shark",
    "popcorn",
    "poison",
    "fork",
    "cherry",
    "toothbrush",
    "cannon"
];

let punchlines = [
    "watch movie with",
    "spread some love",
    "put on cake",
    "clean toilets",
    "go to the moon",
    "achieve world peace",
    "help people learn programing"
];
console.log(template({ subjects: subjects[Math.floor(Math.random() * 7)], punchlines: punchlines[Math.floor(Math.random() * 7)] }));