//to create db
use DATABASE_NAME



//how to see data 
use DATABASENAME
//INSIDE DATASBASE
//show collection 
db.COLLECTIONNAME.find() //fetches all collection
db.COLLECTIONNAME.findOne() //fetches first collection



//to create collection inside database 
db.COLLECTIONNAME.insertMany([{},{},{}])
db.rcb.insertMany(
    [
        {name:"virat", age:"36",jersey:18,skills:["batsman","fielder","bowler"]},
        {name:"faf", age:"30",jersey:13,skills:["batsman","fielder"]},
        {name:"siraj", age:"27",jersey:9,skills:["fielder","bowler"]},
        {name:"dk", age:"45",jersey:25,skills:["batsman"]},

    ]
)
//or
db.COLLECTIONNAME.insertOne({})



//to find inside the dbs
db.COLLECTIONNAME.find({OBJECTNAME:FILTER},{PROJECTION:{true,false,(1,0)}})
//EXAMPLE1 
db.rcb.find({skills:{$in:["batsman"]}},{name:1,_id:0,skills:1})
//EXAMPLE2
db.rcb.find({name:{$all:1}},{name:1,_id:0})



//use of $in(OR) , $nin(not in) , $all(AND) , $gt(greater than) , $lt(lesser than )
//$in (used like OR either if one condition also satisfies gives data )
db.COLLECTIONNAME.find({OBJECTNAME:{FILTER}},{PROJECTION:{true,false,(1,0)}})
db.rcb.find({skills:{$in:["batsman"]}},{name:1,_id:0,skills:1})



//$nin (used like nor gives data other than that)
db.COLLECTIONNAME.find({OBJECTNAME:{FILTER}},{PROJECTION:{true,false,(1,0)}})
db.rcb.find({skills:{$nin:["batsman"]}},{name:1,_id:0,skills:1})
//$all (used like AND operator should satisfy all the conditions )
db.COLLECTIONNAME.find({OBJECTNAME:{FILTER}},{PROJECTION:{true,false,(1,0)}})
db.rcb.find({skills:{$all:["batsman","fielder"]}},{name:1,_id:0,skills:1})
//$gt (greater than )
db.COLLECTIONNAME.find({OBJECTNAME:{FILTER}},{PROJECTION:{true,false,(1,0)}})
db.rcb.find({jersey:{$gt:15}},{name:1,_id:0})
//$lt (lesser than )
db.COLLECTIONNAME.find({OBJECTNAME:{FILTER}},{PROJECTION:{true,false,(1,0)}})
db.rcb.find({jersey:{$lt:15}},{name:1,_id:0})
//$push (adds new elements)
db.developers.updateMany({isAvailable:flase},{$push:{empSkills:"materailUI"}})
//deleteing an element using updatemany $pop
db.developers.updateMany({isAvailable:flase},{$pop:{empSkills:"materailUI"}})


//updating present collection
db.COLLECTIONNAME.updateOne({COLLECTIONNAME(tobechanged/tobecompared):"value"},{COLLECTIONNAME(tobeadded)},{upsert:true/false})
//note to be compared works if upsert is true
db.developer.updateOne({name:"abhi"},{$set:{name:"Abhishek"}})
//to add new collection 
db.COLLECTIONNAME.updateOne({randomcollection},{collectiontobeadded}{upserte:true})
db.developer.updateOne({empName:"abhi"},{$set:{empName:"loki"}},{upsert:true})
//updating many
db.developer.updateMany({empskills:Reactjs},{empsal:30000},{upsert:true})
//deleting a particualar element 
db.developers.deleteOne({empName:"blackpanther"})


db.developers.updateMany({empRole:"seniorDev",empPlace:"Banglore"},{$push:{empSal:50000,empSkills:["linus","tester"]}})


//$AND operator 
db.developers.find({$and:[{isAvailable:true},{empAge:{gt:20}}]})
//$or operator
db.developers.find({$or:[{isAvailable:true},{empAge:{gt:20}}]})

//data modeling 
//2types 1.embedded 2.reference

//embedded example (nested object is embeddded) 
db.personsEmbed.insertMany([
    {name:"john",age:34,address:{ city:"banglore",area:"btm",pincode:573201}},
    {name:"loki",age:36,address:{ city:"mumbai",area:"rajajinagar",pincode:573202}},
    {name:"thor",age:70,address:{ city:"pune",area:"jp.nagar",pincode:573204}},
    {name:"hulk",age:50,address:{ city:"banglore",area:"rajajinagar",pincode:573203}},
    {name:"tony",age:86,address:{ city:"jaipur",area:"mgroad",pincode:573209}},
])

//how to access embedded object 
db.personsEmbed.find({"address.city":"banglore"},{_id:0})

//reference example (refering two differnt collections )
db.personsRef.insertMany([
    {name:"carryminati",age:20},
    {name:"ashish",age:30},
    {name:"shlok",age:35}
])

//second collection
db.addressRef.insertMany([
    { city:"banglore",area:"btm",pincode:573201},
    { city:"mumbai",area:"rajajinagar",pincode:573202},
    { city:"jaipur",area:"mgroad",pincode:573209}
])

//connecting collection 
db.personsRef.updateMany([
    {name:"carryminati"},{$set:{address: ObjectId('6639c79999604667fa117b83')}},
    {name:"ashish"},{$set:{address: ObjectId('6639c79999604667fa117b84')}},
    {name:"shlok"},{$set:{address: ObjectId('6639c79999604667fa117b85')}}
])

//aggregate (used to match , project(show), groupby)

google> db.developers.aggregate([{$match:{empRole:"seniorDev"}},
                                {$project:{empName:1,_id:0,empSalary:1}},
                                {$group:{_id:"$empSalary",sumofsal:{$sum:"$empSalary"}}}
                            ])
//output : [ { _id: 'empSalary', sumofsal: 0 } ]

//you can use $sum, $avg, $max, $min, $count...

// db.COLLECTIONNAME.aggregate([{$match:{Objectname:"Object"}},
db.developers.aggregate([{$match:{empRole:"seniorDev"}},

// {$project:{objectName:1/0,objectName:1/0}},
{$project:{empName:1,_id:0,empSalary:1}},

db.developers.aggregate([{$group:{_id:"$empRole",noofEmp:{$count:{}}}}])
// db.COLLECTIONNAME.aggregate([{$group:{_id:"$objectNamepresentindb",giveNewNameforCreatedId:{function:{"$objectNamepresentindb"}}}}])

//school database  
db.Students.insertMany(
    [
        {stdName:"virat",stdClass:4,stdAge:"14",stdRoll_no:18,stdSection:"A",stdGender:"male",stdCGPA:9.9},
        {name:"faf", stdClass:4,stdAge:"15",stdRoll_no:13,stdSection:"A",stdGender:"male",CGPA:9.7},
        {name:"siraj",stdClass:2, stdAge:"12",stdRoll_no:9,stdSection:"C",stdGender:"male",CGPA:5.6},
        {name:"dk", stdClass:6,stdAge:"10",stdRoll_no:25,stdSection:"B",stdGender:"male",CGPA:8.5},
        {name:"pooja", stdClass:6,stdAge:"17",stdRoll_no:11,stdSection:"C",stdGender:"female",CGPA:5.0},
        {name:"annanya", stdClass:3,stdAge:"16",stdRoll_no:19,stdSection:"A",stdGender:"female",CGPA:7.0},
        {name:"bhoomika", stdClass:2,stdAge:"11",stdRoll_no:1,stdSection:"B",stdGender:"female",CGPA:9.0},
        {name:"rashmika", stdClass:4,stdAge:"18",stdRoll_no:23,stdSection:"A",stdGender:"female",CGPA:7.0},
        {stdName:"bindu",stdClass:5,stdAge:"14",stdRoll_no:38,stdSection:"A",stdGender:"female",stdCGPA:5.5},
        {stdName:"roopa",stdClass:8,stdAge:"17",stdRoll_no:8,stdSection:"A",stdGender:"male",stdCGPA:4.5},
        {stdName:"Ronaldo",stdClass:7,stdAge:"17",stdRoll_no:7,stdSection:"A",stdGender:"male",stdCGPA:9.9},

    ]
)


