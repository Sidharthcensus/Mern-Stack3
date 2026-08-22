import mongoose from "mongoose";
 const UserSchema= mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"required field"],
        minlen:[3,"min 3 character "]
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
const User=mongoose.model("User",UserSchema)
export default User