let section = document.createElement('section');
let form = document.createElement('form');
let newname = document.createElement('label');
let input = document.createElement('input');
let password = document.createElement('label');
let inputpass = document.createElement('input');

newname.innerText = "Username";
password.innerText = "Password";

section.appendChild(form);
form.appendChild(newname);
form.appendChild(input);
form.appendChild(password);
form.appendChild(inputpass);

document.body.append(section);

section.style.height = "100vh";
section.style.width = "100vw"; 
section.style.display = "flex";
section.style.justifyContent = "center";
section.style.alignItems = "center";

form.style.border = "2px solid black";
form.style.height = "400px";
form.style.width = "600px";
form.style.alignContent = "center";
form.style.padding = "50px";
form.style.background="linear-gradient(rgb(12, 114, 118),rgb(4, 254, 179)"

newname.style.fontSize = "30px";
newname.style.padding = "20px";

input.style.fontSize = "30px";
input.style.border="2px solid black"
input.style.margin="10px"

inputpass.style.margin="10px"
inputpass.style.fontSize = "30px"; 


password.style.fontSize = "30px";
password.style.padding = "20px"; 
inputpass.style.border = "2px solid black";



