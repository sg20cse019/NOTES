let inputs = document.querySelectorAll("input")
let form = document.querySelector("form")
let button = document.querySelector("button")

function formHandle(){
    event.preventDefault();

    let userName = inputs[0].value;
    let userSalary = inputs[1].value;
    let userCompany = inputs[2].value;

    if(userName==""||userSalary==""||userCompany==""){
        inputs.forEach((x)=>{
            x.style.border = "1px solid red"
            x.style.boxShadow="0px 0px 10px red"
            
            button.style.border="1px solid red"
            button.style.boxShadow="0px 0px 10px red"

            form.style.border="1px solid red"
            form.style.boxShadow="0px 0px 10px red"

        })
    }
    
    else
    {
        inputs.forEach((x)=>{
            x.style.border="1px solid green"
        })
    
    let userData ={
        userName,userSalary,userCompany
    }

    fetch("http://localhost:4000/users",{
        method:"POST",
        body:JSON.stringify(userData)
    }).then(()=>{
        console.log("Data Succefully Stored");
        window.location.assign("users.html")
    })
        .catch(()=>{
            console.log("Did Not Get Data");
        })
}
}