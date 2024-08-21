//! to create a file and write the data , if you dont pass second argument 
//! it will throw the error 
//! note writeFile does not throw any data so data cannot be printed
 const fs = require("fs");
// fs.writeFileSync("san.txt","this is fs module example")
// console.log("file created");

// !if you use writeFileSync on same file it will overWrite 
// fs.writeFileSync("san.txt","this is overwritten")
// console.log("file overwritten");

//! if you want to write without overwriting you have to use append file 
// fs.appendFileSync("./san.txt"," \n extra things added")
// console.log("data appendend successfully") 

//! ways to read file which is written
let readData = fs.readFileSync("./san.txt")
console.log(readData)

let readData2 = fs.readFileSync("./san.txt")
console.log(readData2.toString());

let readData1 = fs.readFileSync("./san.txt","utf-8");
console.log(readData1)

//!to delete the file 
// fs.unlinkSync("./san.txt")
// console.log("file deleted")

//!to rename the file //to change format also ex from txt to js , js html anything 
// fs.renameSync("vk.txt","sample.txt");
// console.log("file renamed")
// fs.renameSync("vk.js","vk.txt");
// console.log("file renamed")

//!how to create a folder 
//!to mkdir we use mkdirSync
// fs.mkdirSync("samplemodules")
// console.log("folder created")

//!nested folder
// fs.mkdirSync("./samplemodules/nestedmodules");
// console.log("nested folder created ")

//!to directly create and write inside that 
// fs.writeFileSync("./samplemodules/nestedmodules/index.html","<h1>HEllo world!</h1>")
// console.log("file create dand written successfully")

//! how to remove folder 
//! method name is => rmdirSync 
// fs.mkdirSync("model")
// console.log("folder created ")

// fs.rmdirSync("./model")
// console.log("folder removed")

//! how to delete nested folders and files 

// fs.rmdirSync("./samplemodules")
// console.log("removed ")

//! it's not possible because it's not empty.

// fs.unlinkSync("./samplemodules/nestedmodules/index.html");
// console.log('index file is deleted');
// fs.rmdirSync("./samplemodules/nestedmodules"); 
// console.log(' folder is removed');
// fs.rmdirSync("./samplemodules");
// console.log('sample is removed');




