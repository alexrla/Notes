const dotenv = require("dotenv");
dotenv.config();

const { MongoClient } = require("mongodb");

let db;

// cb: callback function
const initDb = cb => {

    MongoClient.connect(process.env.URL, { useUnifiedTopology: true })
    .then(client => {
        db = client
        cb(null, db);
    })
    .catch(error => {
        cb(error);
    })



};

const getdb = () => {
    return db;
}

module.exports = {
    initDb,
    getdb
};