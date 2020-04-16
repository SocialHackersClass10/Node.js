"use strict"
const fetch = require("node-fetch");
let key = "admin:hvgX8KlVEa";

//Encoding to base64
let buff = new Buffer.from(key);
let baseEncoding = buff.toString("base64");

function enterSite() {
    fetch("https://restapiabasicauthe-sandbox.mxapps.io/api/books", { headers: { 'Authorization': `Basic ${baseEncoding}` } })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
enterSite();
