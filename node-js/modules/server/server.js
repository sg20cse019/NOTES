//? run this in 5000 with css file 
// const http = require("http")
// const fs = require("fs")
// let server = http.createServer(((req,res)=>{
//     res.writeHead(200,"ok",{"content-type":"text/html"})

//     let readData = fs.createReadStream("./index.html","utf-8")

//     readData.pipe(res);

//     // res.end("printed using nodejs")
// }))

// server.listen(5000,err=>{
//     if(err)throw err;
//     console.log("server is running on port 5000")
// })

//! example 
// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,"ok",{"content-type": "text/css"})

//     let readData = fs.createReadStream("./styles.css","utf-8")

//     readData.pipe(res);

//     res.end("printed using nodejs")
// })

// server.listen(4000,err=>{
//     if(err)throw err;
//     console.log("server is running on port 5000")
// })
