const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res) => {

    res.send("O aplicativo está funcionando!");

});

app.listen(process.env.PORT, console.log("App funcionando!"));