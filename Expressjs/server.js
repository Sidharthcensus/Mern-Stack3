const express =require("express")
const app= express()
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("Hello world From express ")
})

// Dynamic routing  
app.get("/application/:id",(req,res)=>{
    res.send(`Fecting application with id ${req.params.id}`)
})
// Query Parameters
// ex:1
app.get("/application",(req,res)=>{
    const {status}=req.query
    res.send(`Fetching the Query ${status}`)
})
// ex:2
app.post("/login",(req,res)=>{
    const{username,password}=req.body
    res.send(`welcome ${username}`)
})


// ex:3
const products=[
    {pid:1,title:"monitor",price:4000},
    {pid:2,title:"Printer",price:7700},
    {pid:3,title:"Mouse",price:9900},
    {pid:4,title:"Smartphone",price:7800},
    {pid:5,title:"UPs",price:3300},
]

app.get("/product",(req,res)=>{
    const maxprice=parseFloat(req.query.maxPrice)
    const filteredProducts=products.filter(p=>p.price<maxprice)
    // console.log(filteredProducts)
    const limit=parseInt(req.query.limit)
    const result=filteredProducts.slice(0,limit)
    res.json(result)
})

// middleware
const checkAge=require("./ageChecker")
app.get("/auth",checkAge,(req,res)=>{
    res.json({message:"Welcome ji from nde js nd sidharth"})
})
app.listen(5000,()=>console.log("Server is running on https://localhost:5000"))                         