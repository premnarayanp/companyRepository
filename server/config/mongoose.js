// const mongoose = require('mongoose');
import mongoose from "mongoose";

//mongoose.connect(process.env.MONGO_DB_URL);
mongoose.connect("mongodb://127.0.0.1/company_repository");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function () {
    console.log('connected to Database :: MongoDB');
});

export default db;