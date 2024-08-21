const fs = require("fs").promises;

//! how to create file using promises 
//! note writeFile does not throw any data so data cannot be printed
// fs.writeFile("./welcome.txt","Hello world!")
//     .then(_=>console.log("data created"))
//     .catch(err => {
//         console.log(err)
//     })

//! How to read data with promises
// fs.readFile("./lalala.txt", "utf-8")
//     .then(data => console.log(data))
//     .catch(err => {
//         console.log(err);
//     });

//! how to update file using promise 
// fs.appendFile("./lalala.txt","\n justin biber")
//     .then(_=>console.log("data added"))
//     .catch(err=>console.log(err))



