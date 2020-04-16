"use strict"

const net = require('net');
const port = process.argv[2];
const server = net.createServer(socket => {
    socket.end(`${getDate()}\n`);
})
server.listen(port);

function getDate() {
    let today = new Date;
    return `${today.getFullYear()}-${formatNum(today.getMonth() + 1)}-${formatNum(today.getDate())} ${formatNum(today.getHours())}:${formatNum(today.getMinutes())}`
}

function formatNum(num) { return num < 10 ? `0${num}` : num; }