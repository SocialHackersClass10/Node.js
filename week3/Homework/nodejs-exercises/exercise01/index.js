"use strict"
const fetch = require("node-fetch");

function getJoke() {
    fetch("http://api.icndb.com/jokes/random")
        .then(response => response.json())
        .then(data => console.log(data.value.joke))
        .catch(err => console.log(err));
}
getJoke();
