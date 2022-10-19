const db = require("./db/connection");

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const notesRoutes = require("./routes/notes");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.render("home");

});

app.use("/notes", notesRoutes);

db.initDb((error, db) => {

    if(error) console.log(error);
    else {
        console.log("Conexão realizada com sucesso!");
        app.listen(process.env.PORT, console.log("App funcionando!"));
    }
});