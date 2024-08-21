function readData() {
    fetch('http://localhost:3000/students')
    .then((data) => data.json())
    .then(data => {
        let article = document.querySelector('article');
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        thead.innerHTML = `<tr>
                <th>Name</th>
                <th>Class</th>
                <th>School</th>
                <th>Actions</th>
            </tr>`;
        table.appendChild(thead);
        let tbody = document.createElement('tbody');

        data.forEach(student => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.sname}</td>
                <td>${student.sclass}</td>
                <td>${student.school}</td>
                <td>
                    <button onclick="editStudent(${student.id})">Edit</button>
                    <button onclick="deleteStudent(${student.id})">Delete</button>
                </td>`;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        article.innerHTML = ''; 
        article.appendChild(table); 
    })
    .catch(error => console.log("Error fetching data:", error));
}


readData();
