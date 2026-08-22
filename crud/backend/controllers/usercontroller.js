import User from "../model/userModel.js";

 export const Createuser=async(req,res)=>{
    try{
    const{fullname,email}=req.body
 if(!fullname||!email){
    res.json({sucess:false,message:"Please fill the input  fields"})
 }
const user=new User ({fullname,email})
await user.save()
res.json({sucess:true,message:"Record sucessfully saved"})
}

 catch(err){
    res.send(err)
    console.log(err)
 }

}
