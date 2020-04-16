"use strict"

const http = require("http");
const bl = require("bl");
let urls = process.argv.slice(2);
let counter = urls.length;
let arr = [];

urls.forEach((url, index) => {
    http.get(url, res => (

        res.pipe(bl((err, data) => {
            if (err) {
                console.log(err)
                return;
            }
            arr[index] = data.toString();
            counter--;

            if (counter === 0) {
                arr.forEach(item => console.log(item))
            }
        }))
    ))
})