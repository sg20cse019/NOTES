person = {
    name:"loki",
    age:25,
    place:"banglore"
}
//(...) used add objects in differnt object without making nested object
//for unpacking
let empdetails={
    empid:"google@1123",
    ...person
}

console.log(empdetails)

let empdetail={
    empid:"google@1123",
    person
}

console.log(empdetail)
//rest(...)
//same working but if you use in function parameter its rest