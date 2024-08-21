let a=10;
function x(){
    let a=20;
    console.log(a);
    a=30;
}
function y(){
    a='Hi';
    console.log(a);
}

x();
y();
console.log(a);