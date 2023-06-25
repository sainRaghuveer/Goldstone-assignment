const express=require("express");
const cors=require("cors");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user.route");
const { exportCSV } = require("./controllers/exportCsv.controller");
require('dotenv').config();

//Created app 
const app = express();


//parsing configuration
app.use(express.json());


//to handle cross origin requests
app.use(cors());


//default route
app.get("/", (req, res) => {
    res.send(`<h1 style="text-align:center; color:blue;">Welcome to the Goldstone Backend ... 🪄</h1>`);
});


//user routes
app.use("/api", userRouter);


//csv download Routes
app.use("/api", exportCSV);


app.listen(process.env.PORT, async()=>{

    try{
        await connection;
        console.log("connected with goldstone db")
    }catch(error){
        console.log(error)
    }

    console.log(`Server is running at PORT ${process.env.port}`)
})