let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    Phone:Number,
    password:String
})

let registerUser = mongoose.model("registerUsers",userSchema)

module.exports = registerUser