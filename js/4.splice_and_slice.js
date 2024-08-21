// splice 
let x = [0,1,2,3,4,5];
console.log("after applying splice");
x.splice(0,3) // (start index, delete count, (opt) element to be added)
console.log(x);
x.splice(0,0,3,3,3);
console.log(x);
console.log("-----------------------");
//slice -- gives small part of array
let y = [0,1,2,3,4,5];
console.log("after applying slice");
let z = y.splice(0,4) // (start index,end index)
console.log(y);
let i = y.splice(0,1);
console.log(y);

//also check out (index of and includes)