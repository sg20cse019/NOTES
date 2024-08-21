//object creation
let carbrand = {
    name : "supra",
    brand : "toyota",

    //array inside object and objects inside array
    otherbrands : [
        {car : "lambo"},
        {car : "tesla"},
        {car : "rollsroyce"}]
}


//calling objects
console.log(carbrand);
console.log(carbrand.name);


//update of objects
carbrand.name = "hummer"
console.log(carbrand.name);

//calling of array
console.log(carbrand.otherbrands);

//calling of object present in array
console.log(carbrand.otherbrands[0]);

//calling of string
console.log(carbrand.otherbrands[0].car);

//deleting of last element
carbrand.otherbrands.pop()
console.log(carbrand.otherbrands);
