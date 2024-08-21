function fetchdata() {
    fetch("http://localhost:5000/users",{method:"POST",
        
    })
    .then((data)=>{return data.json})
    .then((users)=>{console.log(users);})
    .catch(()=>{console.log("didnt get the data");})

}

fetchdata()