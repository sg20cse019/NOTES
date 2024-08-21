let arr = ["one","two","three"]


console.log("using for each loop");
arr.forEach((index,element) => {
        console.log(index,element);
})

console.log("using for loop and IN");
for(let index in arr){
    console.log(index);
}

console.log("using for loop and OF");
for( let element of arr){
    console.log(element);
}


// o/p
// using for each loop
// one 0
// two 1
// three 2
// using for loop and IN
// 0
// 1
// 2
// using for loop and OF
// one
// two
// three

// forEach 
console.log("difference b/w forEach and MAP ");
let arr2 = [10,20,30]

let value = arr2.forEach( (x)=>{
    return x; //forEach give undefined value
}
)
console.log(value);
console.log("-----------------------------------");
// map
let value1 = arr2.map( (x)=>{
    return x; //map gives o/p+array
}
)
console.log(value1);

