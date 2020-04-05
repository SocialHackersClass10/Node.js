"use strict"

const http = require("http");
const bl = require("bl");
let url = process.argv[2];

http.get(url, res => (

    res.pipe(bl((err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(data.length);
        console.log(data.toString());
    }))
))

