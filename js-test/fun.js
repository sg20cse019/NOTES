let inputs = document.querySelectorAll("input");
let table = document.querySelector("table");
let btn = document.getElementById('mainbtn');

function createRow(bank, user) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let editbtn = document.createElement("button");
  let deletebtn = document.createElement("button");

  td1.textContent = bank;
  td2.textContent = user;

  deletebtn.textContent = "Delete";
  deletebtn.onclick = function() {
    table.removeChild(tr);
  };

  editbtn.textContent = "Edit";
  editbtn.onclick = function() {
    inputs[0].value = bank; // Populate input for editing
    inputs[1].value = user; // Populate input for editing
  };

  td3.append(deletebtn, editbtn);
  tr.append(td1, td2, td3);
  table.appendChild(tr);
}

function crud() {
  let bank = inputs[0].value;
  let user = inputs[1].value;

  if (bank === "" || user === "") {
    alert("Please fill all the fields.");
  } else {
    createRow(bank, user);

    // Clear input values after adding a new row
    inputs[0].value = "";
    inputs[1].value = "";
  }
}

btn.addEventListener("click", crud);









  
