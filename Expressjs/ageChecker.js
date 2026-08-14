const checkAge=(req,res,next)=>{
const age=req.query.age
if(age<18){
    return  res.json({message:"You are not allowed to Enter due to your age "})
}
next()
}
module.exports=checkAge