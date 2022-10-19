const db = require("../db/connection");

const { ObjectId } = require("mongodb");

const Router = require("express").Router;

const router = Router();

router.get("/", (req, res) => {

    res.render("notes/create");

});

router.post("/", (req, res) => {

    const { title, description }= req.body;

    db.getdb()
    .db()
    .collection("notes")
    .insertOne({ title, description });

    res.redirect(301, "/");

})

module.exports = router;