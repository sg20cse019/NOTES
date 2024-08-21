//! Async and Await
const fs = require("fs").promises

//! how to create file using Async function 
// let createData = async()=> {
//     try {
//         let data = await fs.writeFile("./asyncFile","file created using async funtion")
//         console.log("file created !")
//     } catch (err) {
//         console.log(err)
//     }
// }

// createData()

//! how to read file using async function
// let readData = async()=> {
//     try {
//         let data = await fs.readFile("./asyncFile","utf-8")
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }

// readData()

//! how to update file using async function 
// let updateData = async()=> {
//     try {
//         let data = await fs.appendFile("./asyncFile","\nfile appended using async funtion")
//         console.log("file appended!")
//     } catch (err) {
//         console.log(err)
//     }
// }

// updateData()

//! how to delete file using async funtion 
// let deleteData = async()=> {
//     try {
//         let data = await fs.unlink("./bye.txt")
//         console.log("file deleted!")
//     } catch (err) {
//         console.log(err)
//     }
// }

// deleteData()


