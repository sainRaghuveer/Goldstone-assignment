const mongoose = require("mongoose");


//Creating user schema using mongoose
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    status: {
        type: String
    }
},{timestamps:true});


//Creating userModel using mongoose
const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel
};
