let inputs = document.querySelectorAll("input")

function formHandle(){
    let payload = {
        name:inputs[0].value,
        email:inputs[1].value,
        Phone:inputs[2].value,
        password:inputs[4].value
    }
    fetch("http://localhost:5000/formData",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body: JSON.stringify(payload)
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err);
    })
}