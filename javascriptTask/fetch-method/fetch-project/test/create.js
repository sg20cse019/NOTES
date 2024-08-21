document.getElementById('student').addEventListener('submit',
    function (event) { 
        event.preventDefault();
    let sname = document.getElementById('name').value
    let sclass = document.getElementById('class').value
    let school = document.getElementById('school').value
    students = {sname,sclass,school}
    store(students);
    
    
}); 
function store(Sdata) {
    fetch('http://localhost:3000/students',{method:'POST',body:JSON.stringify(Sdata)})
    .then(data => data.json())
    .then(()=>{console.log("success data stored")
        window.location.href="./read.html"
    })
    .catch(()=>console.log("found error!"))
}