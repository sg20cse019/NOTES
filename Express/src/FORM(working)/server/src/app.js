let express = require("express")
let cors = require("cors")
let mongoose = require("mongoose")
let User = require("./model")

let app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/USERS")
.then(()=>console.log('connected to MONGO'))
.catch((err)=>console.log(err))

app.post("/formData",(req,res)=>{
    console.log(req.body.email);

    User.findOne({email:req.body.email})
    .then((data)=>{
       if(data){
        console.log(data);
        res.send({"message":"data already registered"})
       }else{
        let data = new User(req.body)
        data.save().then(()=>{console.log("saved");})  
        res.send({"message":"data success"})  
       }
    }).catch((err)=>{
       res.send("something went wrong")
    })
})

app.post("/login",(req,res)=>{
    let {userName,Password} = req.body
    console.log(req.body);
    User.findOne({email:userName}).then((data)=>{
       if(data){
        if(data.email==userName){
            console.log("yess");
            res.json({flag:"RegisteredUser"})
        }else{
            console.log("not a user");
        }
       }else{
        console.log("not a user");
       }
    })
})

app.get("/users",(req, res)=>{
    User.find().then((data)=>{res.send(data)}).catch(()=>{console.log("didnt get the data");})
})

app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);

    User.findOne({_id:req.params.id})
    .then((data)=>{res.send(data)})
})

app.put("/users/:id",(req,res)=>{
    User.updateOne({_id:req.params.id},req.body)
    .then(()=>{res.send({"message":"dataupdated"})})
    .catch(()=>{console.log("didnot update");})
    
})

app.delete("/users/:id",(req,res)=>{
    User.deleteOne({_id:req.params.id})
    .then(()=>{res.send({"message":"deleted"});})
})

app.listen(5000,()=>{
    console.log("server has started at port 5000");
})