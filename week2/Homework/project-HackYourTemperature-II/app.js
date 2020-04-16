"use strict"

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));


app.get("/", (req, res, next) => {
    res.render("index", { layout: false });
});

app.post("/weather", (req, res) => {
    let city = req.body.cityName;
    res.send(city);
})

app.listen(port, () => console.log("Hello from back-end to front-end!"));