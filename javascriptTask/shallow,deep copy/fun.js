let car = {
    carName : "toyato",
    color : "black",
    model:{
        year:2024,
        name:"supra"
    }
}

// let car1 = car;
//or
// let car1 = {
//     ...car
// }

// console.log(car);
// console.log(car1); // shallow copy 


//deep copy
let car1 = JSON.parse(JSON.stringify(car)); 

car1.model.year = 2025;
console.log(car);
console.log(car1);


