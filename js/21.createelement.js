let h1 = document.createElement('h1');
h1.innerText= "surprise";
document.body.append(h1);

let ol = document.createElement('ol')
ol.innerText="frontend";

let li1 = document.createElement('li')
li1.innerText="html";
ol.appendChild(li1);

let li2 = document.createElement('li')
li2.innerText="css";
ol.appendChild(li2);

let li3 = document.createElement('li')
li3.innerText="js";
ol.appendChild(li3);

document.body.append(ol);
