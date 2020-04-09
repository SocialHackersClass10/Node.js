"use strict"
const fetch = require("node-fetch");

function reserve() {
    fetch("https://reservation100-sandbox.mxapps.io/api/reservations", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: {
            "name": "Stef Lev",
            "numberOfPeople": 77
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
reserve();

