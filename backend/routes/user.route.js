const express = require('express');
const controller = require("../controllers/user.controller");

//Creating routes with express routes
const userRouter = express.Router();


/*-------------------- New user post Route -----------------------*/
userRouter.post("/user/userdata", controller.postUser);


/*-------------- All user get Route with pagination --------------*/
userRouter.get("/user/data", controller.getUser);


/*--------------------- user update Route -------------------------*/
userRouter.patch("/user/:id", controller.updateUser);


module.exports={
    userRouter
}