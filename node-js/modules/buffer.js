//! what is buffer (google)

//! method name : from()
//! how to create a buffer data 
// const Mybuffer =  Buffer.from("hello world!")
// console.log(Mybuffer)

//! how to convert buffer into actual data 
// console.log(Mybuffer.toString())

//! how to allocate buffer
// const Newbuffer = Buffer.alloc(3); 
//!it will give 3 stack of temporary dat storage 
// console.log(Newbuffer);

//!second parameter 
// const buf2 = Buffer.alloc(3,'a');
// console.log(buf2) //61 61 61 

//! allocation of data
// const buf3 = Buffer.alloc(4)
// buf3.write("hello world!")
// console.log(buf3.toString())

//! how to check it is Buffer or not ? 
// console.log(Buffer.isBuffer()) 
//! returns boolean values false converted to string 


