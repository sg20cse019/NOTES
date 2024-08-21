// let http = require('http')
// let fs = require('fs')

// let server = http.createServer((req,res)=>{
//    let data = fs.readFileSync('./db.json','utf-8')
//        res.end(data)
// })

// server.listen(4000,(err)=>{
//     if(err) throw err
//     console.log("server is running now")
// })

let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    if (req.url=="/"){
        let data = fs.readFileSync('../client/home.html','utf-8')
        res.end(data)
    }else if (req.url=="/login"){
        let data = fs.readFileSync('../client/login.html','utf-8')
        res.end(data)
    }else if(req.url=="/data"){
        let data = fs.readFileSync('../client/data.html','utf-8')
        res.end(data)
    }else if (req.url=="/register"){
        let data = fs.readFileSync('../client/register.html','utf-8')
        res.end(data)
    }else if (req.url=="/db"){
        let data = fs.readFileSync('./db.json','utf-8')
        res.end(data)
    }else{
        res.end('entered wrong url')
    }
})

server.listen(5000,(err)=>{
    if(err) throw err
    console.log("server is running")
})


