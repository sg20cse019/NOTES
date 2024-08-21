let abs = require("fs")

// abs.readFile("./modules/hello.txt",{encoding:"utf-8"},(x,y)=>{
//     console.log(y);
// })

// let value = abs.readFileSync("./modules/hello.txt",{encoding:"utf-8"},(error,data)=>{
//     console.log(data);
// })

// console.log(value)

// abs.writeFile("./modules/hello.txt","The King is back",()=>{
//     console.log("dataupdated")
// })

// let value1 = abs.writeFileSync("./modules/bye.txt","this was created by itself in sync even if it is not created ",()=>{
//     console.log("data created ")
// })

// console.log(value1)

let value2 = abs.unlink("./modules/hello.text",()=>{
    console.log("data deleted")
})
console.log(value2)

//read all other fs methods also

