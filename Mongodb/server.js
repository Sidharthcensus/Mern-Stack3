const express=require("express")
const mongoose=require("mongoose")
const app=express()

app.use(express.json())
const connectDB=async()=>{
    try{
  await mongoose.connect('mongodb://localhost:27017/db1')
  console.log("connected")
    }
    catch(err){
        console.error(err)
    }
}
connectDB()
// app.post("/",async(req,res)=>{
//     await Product.insertMany([
//         {title:"Monitor",category:"Electronics",price:5000,stock:10,rating:4.5},
//         {title:"Monitor",category:"Electronics",price:5000,stock:10,rating:4.5},
//         {title:"Monitor",category:"Electronics",price:5000,stock:10,rating:4.5},
//         {title:"Monitor",category:"Electronics",price:5000,stock:10,rating:4.5},
//         {title:"Monitor",category:"Electronics",price:5000,stock:10,rating:4.5},
//     ])
//     res.send("data inserted")
// })

app.get("/",async(req,res)=>{
    const products=await Product.find()
    res.json(products
        
    )
})

app.listen(5000,()=>{console.log("server is runing on http://localhost:5000")})


// schema : structure of yoor data 
const productSchema =new mongoose.Schema({
    title:String,
    category:String,
    price:Number,
    stock:Number,
    rating:Number,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

// Model - used to interact with collection 
const Product =mongoose.model("Product",productSchema)

