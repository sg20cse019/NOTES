let inputs = document.querySelectorAll('input');

function formHandle(event) {
    event.preventDefault(); 
    let payload = {
        name: inputs[0].value,
        Email: inputs[1].value,
        Phone: inputs[2].value,
        password: inputs[3].value,
    };
    console.log(payload);
    fetch('http://localhost:5000/submitform',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(payload)
    })
    .then((res)=>{res.json()})
    .then((data)=>{console.log("success",data)})
    .catch((err)=>{throw err})
    
}

let form = document.getElementById('Form')
form.addEventListener('submit', formHandle);