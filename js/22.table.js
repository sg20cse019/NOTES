let section = document.createElement('section');
section.style.height = "100vh";
section.style.width = "100vw"; 
section.style.display = "flex";
section.style.justifyContent = "center";
section.style.alignItems = "center";

let table = document.createElement('table');
table.style.border = "2px solid black";
table.style.borderCollapse = "collapse"; 

let headerRow = document.createElement('tr');
let days = ['Day/Period', 'I', 'II', 'III', 'IV', 'Lunch', 'V', 'VI', 'VII', 'VIII'];
days.forEach(day => {
    let th = document.createElement('th');
    th.innerText = day;
    th.style.border = "1px solid black";
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

let mondayRow = document.createElement('tr');
mondayRow.innerHTML = `
    <td>Monday</td>
    <td>Eng</td>
    <td>Mat</td>
    <td>Chem</td>
    <td>Lab</td>
    <td></td>
    <td>Phy</td>
    <td>theases</td>
    <td>games</td>
    <td>skills</td>
`;

let tds = mondayRow.querySelectorAll('td');
tds.forEach(td => {
    td.style.border = '1px solid black';
});

table.appendChild(mondayRow);

let tuesdayRow = document.createElement('tr');
tuesdayRow.innerHTML = `
    <td>Tuesday</td>
    <td>Eng</td>
    <td>Mat</td>
    <td>Chem</td>
    <td>Lab</td>
    <td></td>
    <td>Phy</td>
    <td>theases</td>
    <td>games</td>
    <td>skills</td>
`;
table.appendChild(tuesdayRow);

let wednesdayRow = document.createElement('tr');
wednesdayRow.innerHTML = `
    <td>wednesday</td>
    <td>Eng</td>
    <td>Mat</td>
    <td>Chem</td>
    <td>Lab</td>
    <td></td>
    <td>Phy</td>
    <td>theases</td>
    <td>games</td>
    <td>skills</td>
`;

let tds1 = wednesdayRow.querySelectorAll('td');
tds1.forEach(td => {
    td.style.border = '1px solid black';
});


section.appendChild(table);


document.body.appendChild(section);
