// //! Navigating from one page to other through the link is know as routing
// //? EXAMPLE 1
// //! s-1 import
// const http = require("http")
// //! s-2 create server
// const server = http.createServer((req,res)=>{
// //! s-3 navigate through IF ELSE for other pages
//     if(req.url=="/about")
//     {
//         res.writeHead(200,"ok",{"content-type":"text/plain"})
//         res.end("you are in about page");
//     } else if (req.url=="/home"){
//         res.writeHead(200,"ok",{"content-type":"text/plain"})
//         res.end("you are in HOME page");
//     } else {
//         res.end("page NOT FOUND")
//     }
// })
// //! s-4 Run the server
// server.listen(5000,err=>{
//     if(err) throw err
//     console.log('server is running')
// })

//? example 2
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, "OK", { "content-type": "text/html" });
    fs.createReadStream("./index.html", "utf-8").pipe(res);
  } else if (req.url == "/css") {
    res.writeHead(200, "OK", { "content-type": "text/css" });
    fs.createReadStream("./styles.css", "utf-8").pipe(res);
  } else {
    res.writeHead(200, "OK", { "content-type": "text/plain" })
    res.end("PAGE NOT FOUND");
  }
});
server.listen(5000, (err) => {
  if (err) throw err;
  console.log("PORT IS RUNNING ON 5000");
});
