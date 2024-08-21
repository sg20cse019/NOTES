const { application } = require("express")

let input = document.querySelector('input')
function submit() {
    fetch('',{
        method:'POST',
        headers:{'content-type':'application/JSON'},
        body:JSON.stringify({Name:input.value})
    })
    .then(()=>{console.log('success'+input.value)})
    .catch((err)=>{throw err})
}

function getData(params) {
    fetch('')
    .then((req)=>{req.json()})
    .then((data)=>{data})    
}


