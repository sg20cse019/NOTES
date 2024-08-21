//* const fs = require("fs")
//! for Async (Asynchronous) function we have to use callback with one parameter
//! note writeFile does not throw any data so data cannot be printed
// fs.writeFile("new.txt","la la la",(err)=>{
//     if(err)throw err;
//     console.log("file created")
// })

//! how to read Async data 
//! if you are using Sync method first sync will executed then other functional part
//! syntax : readfile("path",'encode',callBack)
// fs.readFile("./new.txt",'Utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
// console.log(`this will come before 
// reading file because it is Async,
// if it is sync it will come after 
// the reading the file`);

//! rename the file 
// fs.rename("new.txt","lalala.txt",(err)=>{
//     if(err) throw err 
//     console.log("rename done ")
// })
