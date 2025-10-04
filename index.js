import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from"../routes/userRoute.js";

const app=express();
app.use(bosyparser.json());
dotenv.config();

const PORT=process.env.PORT||7000;
const MONGOURL=Process.env.MONGO-URL;

mongoose
.connect(MONGOURL)
.then(()=>{

    console.log("DB Connected Succesfully")
    app.listen(PORT,()=>{
        console.log(`server is running on port:${PORT}`)
    });
})
.catch((error)=>console.log(error));

app.use("/api",route);