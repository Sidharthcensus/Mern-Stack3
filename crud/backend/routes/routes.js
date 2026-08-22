import express from "express";
import { Createuser } from "../controllers/usercontroller.js";
const router=express.Router()

router.post("/",Createuser)
export default router