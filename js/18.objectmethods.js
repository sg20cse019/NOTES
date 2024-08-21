let person = {
    name:"kiran",
    age:25,
    skills:["html","css","js"]
}

//these are the methods used fetch the keys , values , and entries of the object 
let keys = Object.keys(person)
console.log(keys);

let values = Object.values(person)
console.log(values);

let both = Object.entries(person)
console.log(both);

//note : Object.keys,values,entries... 
// key : value 
// key+value = entries 