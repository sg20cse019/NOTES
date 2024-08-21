// // task1
// let store = ["mobile","earphones","backcover"]
// console.log("enter the element to add ");
// j = prompt("enter the no products to be added")
// for (let i = 0; i <= j; i++) {
//     store.push(prompt("enter the element"+i));
// }
// store.push(prompt("enter the element"));
// console.log(store);
// //last element will be removed 
// store.pop();
// console.log(store);

//task2
//shift and unshift 
// cart =[]
// cart.unshift(prompt("enter the product to add in cart"));
//j=prompt("enter the products to add in cart")
// for (let i = 0; i <= j; i++) {
//     console.log("items you added are "+cart);
// }
// //shift removes 
// console.log("after using shift ");
// cart.shift()
// console.log(cart); 

// console.log("start")
function x() {
    let  a = 10
        function y() {
            // console.log(a)
            return a
        }
        // a = 20
        return y()
}
let z = x()
console.log(z)
// z()
// let m = z()
// console.lsog(m)
