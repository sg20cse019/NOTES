console.log("js-currying");
function x() {
    let a =10
    function y() {
        return function z(){
            console.log("zzzzzzzzzz");
        }
    }
    return y
}
console.log(x()()());