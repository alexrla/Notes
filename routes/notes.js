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

});

router.post("/delete", (req, res) => {

    const id = new ObjectId(req.body.id);

    db.getdb().db().collection("notes").deleteOne({ _id: id });

    res.redirect(301, "/");

});

router.get("/:id", async (req, res) => {

    const id = new ObjectId(req.params.id);

    const note = await db.getdb().db().collection("notes").findOne({ _id: id });

    res.render("notes/details", { note });

});

module.exports = router;