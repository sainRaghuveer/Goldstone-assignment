const express=require("express");
const cors=require("cors");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user.route");

require('dotenv').config();
const app=express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Welcome to Goldstone!");
})

app.use("/api", userRouter);



app.listen(process.env.PORT, async()=>{

    try{
        await connection;
        console.log("connected with goldstone db")
    }catch(error){
        console.log(error)
    }

    console.log(`Server is running at PORT ${process.env.port}`)
})