const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("home");

});

app.listen(process.env.PORT, console.log("App funcionando!"));