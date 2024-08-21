// //! how to create a server 

// //!step1 : we have to import http 
// const http = require("http");

// //! create server by using createserver() method 
// const server = http.createServer((req,res)=>{
//     //! set the header 
//     res.writeHead(200,"ok",{"content-type":"text/plain"})

//     res.end("printed using nodejs htttp")
// })

// //! how to run the server ?
// server.listen(5000,err=>{
//     if(err)throw err;
//     console.log("server is running on port 5000")
// })


//? EXAMPLE (run this in 4000 also run server.js in 5000)
// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,"ok",{"content-type": "text/css"})

//     let readData = fs.createReadStream("./styles.css","utf-8")

//     readData.pipe(res);

//     // res.end("printed using nodejs")
// })

// server.listen(4000,err=>{
//     if(err)throw err;
//     console.log("server is running on port 4000")
// })
