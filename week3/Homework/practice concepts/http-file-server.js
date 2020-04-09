"use strict"

const http = require("http");
const fs = require("fs");
let port = process.argv[2];
let file = process.argv[3];

const server = http.createServer((req, res) => {
    let content = fs.readFileSync(file).toString();
    res.write(content);
    res.end();
});
server.listen(port);