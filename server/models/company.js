//const mongoose = require('mongoose');
import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
});


const Company = mongoose.model('Company', companySchema);

// module.exports = User;
export default Company;