//imp

let books = [
    {name:"HTML", price:800},
    {name:"CSS", price:600},
    {name:"JS", price:1400},
    {name:"REACT-JS", price:700}
]

let filteredArr = books.filter((element)=>{
    return element.price<=800
})

console.log(filteredArr);

let checkout = filteredArr.map((book)=>{
    let gst = book.price*30/100
    book.price = book.price+gst
    return book
})

console.log(checkout);

let finalprice = checkout.reduce((acc,cv)=>{
    return acc+cv.price
},0)

