const express = require("express");
const User = require("../models/user.model");
require('dotenv').config();

const userRouter = express.Router();

const userData = [
    {
        name: "Akshat Bharadwaj",
        email: "bharadwaj_akshat@kub-pouros.test",
        gender: "male",
        status: "active",
    },
    {
        name: "Achalesvara Panicker",
        email: "achalesvara_panicker@weber.example",
        gender: "male",
        status: "active",
    },
    {
        name: "Lai Deshpande DVM",
        email: "lai_deshpande_dvm@wisoky-rowe.example",
        gender: "female",
        status: "inactive",
    },
    {
        name: "Dr. Daevika Johar",
        email: "daevika_dr_johar@jacobson-runolfsdottir.test",
        gender: "female",
        status: "inactive",
    },
    {
        name: "Gandharva Gill JD",
        email: "gandharva_jd_gill@hand-mclaughlin.example",
        gender: "female",
        status: "active",
    },
    {
        name: "Anwesha Mukhopadhyay",
        email: "anwesha_mukhopadhyay@beatty-nienow.example",
        gender: "male",
        status: "inactive",
    },
    {
        name: "Bhadra Banerjee",
        email: "bhadra_banerjee@hirthe-miller.example",
        gender: "male",
        status: "inactive",
    },
    {
        name: "Puneet Joshi",
        email: "joshi_puneet@lubowitz-runolfsson.example",
        gender: "female",
        status: "active",
    },
    {
        name: "Kanak Prajapat",
        email: "prajapat_kanak@morissette.example",
        gender: "male",
        status: "inactive",
    },
    {
        name: "Shreya Rana",
        email: "shreya_rana@kemmer-prohaska.example",
        gender: "male",
        status: "active",
    },
]

userRouter.post("/user/postuser", async (req, res) => {
    try {
        const users = await User.insertMany(userData);
        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users check again:", error);
        res.status(500).send({ error: "Something went wrong, check your request" });
    }
});

userRouter.get("/user/data", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users check again:", error);
        res.status(500).send({ error: "Something went wrong, check your request" });
    }
});

userRouter.patch("/user/:id", async (req, res) => {
    const id = req.params.id;
    const {name, email, gender, status} = req.body;

    try {
        const result = await User.findByIdAndUpdate({ _id: id },req.body);
        res.send({ message: "User data updated successfully", user:result });
    } catch (error) {
        console.error("Error updating user data:", error);
        res.status(500).send({ error: "An error occurred while updating user data" });
    }
});


module.exports = {
    userRouter
};
