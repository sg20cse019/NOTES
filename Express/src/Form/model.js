let mongoose=require("mongoose")

let userSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
})

let registerUser = mongoose.model("registerUser",userSchema)

module.exports = registerUser