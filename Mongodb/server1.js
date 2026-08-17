//  Sorting :Used to sort the things 
const express=require("express")
const app= express()
const mongoose=require("mongoose")
app.use(express.json())

const connectDB =async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/db1")
        console.log("connected")
    }
    catch (err){
        console.error(err)
    }
}




connectDB()
app.post("/",async(req,res)=>{
    await Product.insertMany([
        {title:"Monitor",category:"Electronics",price:5000,stock:4,rating:4.5},
        {title:"Laptop",category:"Electronics",price:59000,stock:2,rating:4.3},
        {title:"Pc",category:"Electronics",price:86000,stock:3,rating:3.5},
        {title:"Smartphone",category:"Electronics",price:22000,stock:10,rating:3.0},
        {title:"TV",category:"Electronics",price:15000,stock:6,rating:4.5},
    ])
    res.send("data inserted")
})

app.get("/",async(req,res)=>{
    const products= await Product.find()
    res.json(products)
})

app.get("/sort",async(req,res)=>{
    const sortedProducts =await Product.find().sort({price:1})
    res.json(sortedProducts)
})
app.get("/sortde",async(req,res)=>{
    const sortedProducts =await Product.find().sort({price:-1})
    res.json(sortedProducts)
})
app.get("/or",async(req,res)=>{
    const products= await Product.find({$or:[{category:"Electronics"},{price:{$gt:20000}}]})
    res.json(products)
})
app.get("/not",async(req,res)=>{
    const products= await Product.find({rating:{$not:{$eq:4.5}}})
    res.json(products)
})

app.get("/find/:id",async(req,res)=>{
    const products =await Product.findById(req.params.id)
    res.json(products)
})
app.get("/de/:id",async(req,res)=>{
    const product=await Product.findByIdAndDelete(req.params.id)
    if(product){
       return res.send("Product deleted sucessfully")
    }
    else{
        return res.send("some error occur ")
    }
})
app.listen(5000,()=>console.log("server is running on https://localhost:5000"))

app.post("/create",async(req,res)=>{
    const product=await Product.create(req.body)
    res.json(product)
})
const productSchema =new mongoose.Schema({
    title:{type:String,
        required:true
    },
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