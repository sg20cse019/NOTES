function x(a,b) {
    console.log(a+b);   
}
//converting into arrow function 
x = (a,b) => console.log(a+b);

x(10,20)


//higher order function (accepting a function as an argument)
//here z is callback function
//here y is higher order function
function y(a,b) {
    console.log(a+b);
    b(10,4)
    z() //ud + ud = NaN
}

y(10,z=(a,b) => console.log(a+b))