const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./logger");
const members = require("./Members");

let port = 3000;
app.use(logger);



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index", {
    title: "Member app",
    members
}));

app.use(express.static(path.join(__dirname, "pages")));

app.use("/api/members", require("./routes/api/members"))

app.listen(port, () => console.log(`Server at port ${port} initiated succesfully`));