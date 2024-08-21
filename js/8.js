//function using identifier
function identifiername () {
    console.log("surprise folks")
}

//function using expressions
let a = function (){
    console.log("surprise surprise , folks");
}

//annynoums function , function without name 
// function () {
//     console.log("hello folks");
// }

//calling of function
identifiername()

//calling using variable
a() //works like a function

console.log(a); //works like a varibale

//functions with concation and arguments
function add(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
console.log("2,2");
console.log("number and number");
add(2,2);
console.log("============");
console.log("number and string");
add(2,"2");
console.log("============");
console.log("string and number");
add("2",2);
console.log("============");
console.log("string and string");
add("2","2");