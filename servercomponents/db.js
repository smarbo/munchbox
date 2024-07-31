// db.js

require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.error(`🍃🔴 MongoDB: error ${err}`));
db.once("open", () => console.log("🍃🟢 MongoDB: Connected"));

module.exports = db;
