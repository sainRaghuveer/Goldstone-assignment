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
        type: String,
        enum:{
            values:["male", "female"],
            message:"Choose your gender only male or female"
        }
    },
    status: {
        type: String,
        enum:{
            values:["active", "inactive"],
            message:"Choose your status only active or inactive"
        }
    }
},{timestamps:true});


//Creating userModel using mongoose
const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel
};
