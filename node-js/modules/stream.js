//! what is stream ?

//!types of string

const {stream} = require("stream")

//?CRUD operations only using stream 
//! 1.readable stream 
//! 2.writeable stream 
//! 3.duplex stream 
//! 4.transform Stream 

//! events in stream //data //end //error 
const fs = require("fs")

//! how to read data using stream
// readData.on(end, () => console.log("done") )

// let readData = fs.createReadStream("./lalala.txt","utf-8")
// readData.on("data",chunk=>{
//     console.log(chunk)
// })

// readData.on("error",()=>{
//     console.log(error)
// })

//! how to write data 
//  let writeData = fs.createWriteStream("wc.txt")
//  writeData.write("we won wc")
//  console.log("file created")

//! duplex stream (creates a dublicate file)
// let read = fs.createReadStream("./asyncFile","utf-8")
// let write = fs.createWriteStream("./duplex.txt")
// read.pipe(write)

