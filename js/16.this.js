//this represents current object 

let person={
    x:function () {
       console.log(this); 
       return this.x;
    }
}
person.x();
console.log(person.x());