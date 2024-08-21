let inputs = document.querySelectorAll('input');
let table = document.querySelector("table");
let btn = document.getElementById('mainbtn')
let row;

function formHandler() {
    // event.preventDefault();

let userName = inputs[0].value;
let userSalary = inputs[1].value;
let userComapany = inputs[2].value;

let tr=document.createElement('tr')
let td1=document.createElement('td')
let td2=document.createElement('td')
let td3=document.createElement('td')
let td4=document.createElement('td')
let editbtn = document.createElement('button')
let deletebtn = document.createElement('button')

if(btn.innerText=="submit"){
    if(userName==''||userSalary==''||userComapany==''){
        alert('please fill all the fields ')
}
else{
    td1.innerText=userName;
    td2.innerText=userSalary;
    td3.innerText=userComapany;

    deletebtn.innerText="Delete"
    editbtn.innerText="Edit"

    td4.append(deletebtn,editbtn)
    tr.append(td1,td2,td3,td4);
    table.appendChild(tr);

inputs[0].value = "";
inputs[1].value = "";
inputs[2].value = "";

editbtn.addEventListener("click",()=>{
    btn.innerText="update"

    inputs[0].value = td1.innerText;
    inputs[1].value = td2.innerText;
    inputs[2].value = td3.innerText;

    
    row = tr 
})

deletebtn.addEventListener("click",()=>{
    table.removeChild(tr);

    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';

    btn.innerText='submit';
})
}
}
else{
    row.cells[0].innerText = inputs[0].value
    row.cells[1].innerText = inputs[1].value
    row.cells[2].innerText = inputs[2].value

    inputs[0].value=""
    inputs[1].value=""
    inputs[2].value=""

    btn.innerText="submit"

}
}