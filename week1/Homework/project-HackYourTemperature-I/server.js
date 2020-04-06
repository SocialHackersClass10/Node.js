"use strict"

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from back-end to front-end!")
});

app.post("/", (req, res) => {

})

app.listen(port, () => console.log("Hello from back-end to front-end!"));