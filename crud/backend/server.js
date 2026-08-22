import express from "express";
import "dotenv/config"
import connectDB from "./config/db.js";
import cors from "cors"
import router from "./routes/routes.js";
const app=express()
app.use(express.json())
connectDB()
app.get("/",(req,res)=>{
    res.send("server is running")
})
app.use(cors())
app.use("/crud",router)

app.listen(5000,()=>console.log("server is running on https://localhost:5000"))