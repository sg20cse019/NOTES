const http = require("http")
const fs = require('fs')

let server = http.createServer((req,res)=>{
    let data = fs.readFileSync("./db.json",'utf-8',()=>{
        res.end(JSON.stringify(data))
    })
})

server.listen(5000,()=>{
    if(err) throw err
    console.log("server is Running")
})