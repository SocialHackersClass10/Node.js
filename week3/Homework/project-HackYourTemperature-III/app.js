"use strict"

const express = require("express");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");
const fetch = require("node-fetch");
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));


app.get("/", (req, res) => {
    res.render("index", { layout: false });
});

app.post("/weather", (req, res) => {
    let city = req.body.cityName;
    const APIKEY = require('./sources/keys.json').API_KEY;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                res.render("index", { layout: false, weatherText: "City is not found!" });
                return;
            }
            console.log(`${Math.floor(data.main.temp - 273.15)}°C`)
            res.render("index", { layout: false, weatherText: `The temperature in ${city} is ${Math.floor(data.main.temp - 273.15)}°C` });
        })
})

app.listen(port, () => console.log("Hello from back-end to front-end!"));