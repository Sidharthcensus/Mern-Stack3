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


// fetch products from database
// app.get("/",async(req,res)=>{
//     const products=await Product.find()
//     res.json(products)
// })


// operators in node js 
// 1. $eq - equal to

// app.get("/",async(req,res)=>{
//     const products =await Product.find({rating:{$eq:4.3}})
//     res.json(products)
// })

// exp 2
// app.get("/",async(req,res)=>{
//     const products= await Product.find({catogery:"Electronics"})
//     res.json(products)
// })

// 2.$ne- not eqaul to 
// app.get("/",async(req,res)=>{
//     const products=await Product.find({stock:{$ne:8}})
//     res.json(products)
// })

// 3. $gt -Greater than 

// app.get("/",async(req,res)=>{
//     const products=await Product.find({price:{$gt:88}})
//     res.json(products)
// })


// 4. $gte - Greater and eqaul to 
// app.get("/",async(req,res)=>{
//     const products=await Product.find({price:{$gte:100}})
//     res.json(products)
// })

// 5. $lt -less than 
// app.get("/",async(req,res)=>{
//     const products=await Product.find({price:{$lt:2000}})
//     res.json(products)
// })

// 6. $lte -less than eqaul to 

app.get("/",async(req,res)=>{
    const products=await Product.find({price:{$lte:12000}})
    res.json(products)
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

