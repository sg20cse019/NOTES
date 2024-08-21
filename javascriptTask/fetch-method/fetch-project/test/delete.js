function deleteStudent() {
    fetch(`http://localhost:3000/students/${students}`, {
        method: 'DELETE'
    })
    .then(data => {return data.json();})
    .then(() => {
        console.log("Student deleted");
        readData();
    })
    .catch(error => console.log("Error student:",error));
}

deleteStudent();
