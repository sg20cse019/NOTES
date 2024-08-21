
//split
let arr ="abc"
console.log("before applying split")
console.log(arr);
console.log("after applying split");
let splitarr = arr.split()
let splitarr1 = arr.split("")
console.log("without parnth ");
console.log(splitarr);
console.log("with parnth");
console.log(splitarr1);

//reverse
console.log("after applying reverse");
reverseval=splitarr1.reverse();
console.log(reverseval);

//join 
console.log("after applying join");
joinedval = reverseval.join();
console.log(joinedval);
console.log("after applying join and commas");
joinedval = reverseval.join('');
console.log(joinedval);
