let section = document.createElement("section");
let article = document.createElement("article");
let okbtn = document.getElementById("ok");

let username = document.createElement("input");
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Enter your username");
username.className = "username";
username.setAttribute("id", "username");

let userlabel = document.createElement("label");
userlabel.setAttribute("for", "username");
userlabel.innerText = "UserId :";
userlabel.className = "userlabel";

let password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Enter your password");
password.className = "password";
password.setAttribute("id", "password");

let userpass = document.createElement("label");
userpass.setAttribute("for", "password");
userpass.innerText = "Password :";
userpass.className = "userpass";

let loginbtn = document.createElement("button");
loginbtn.innerText = "Login";
loginbtn.setAttribute("id", "loginbtn");

let newuser = document.createElement("a");
newuser.innerText = "New User? Register here. ";
newuser.setAttribute("href","newuser.html")
newuser.className = "newuser";


document.body.appendChild(section);
section.appendChild(article);
article.appendChild(userlabel);
article.appendChild(username);
article.appendChild(userpass);
article.appendChild(password);
article.appendChild(loginbtn);

var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

let UserData = [
  { username: "loki", password: "root" },
  { username: "clutchgod", password: "godlike" },
  { username: "jonathan", password: "godlike" },
  { username: "scout", password: "s8ul" },
  { username: "neyoo", password: "godlike" },
  { username: "mamba", password: "s8ul" },
];

loginbtn.addEventListener("click", () => {
  let username = usernameInput.value;
  let password = passwordInput.value;

  console.log(usernameInput.value);
  console.log(passwordInput.value);

  function showPopup(message) {
    document.getElementById("popupMessage").textContent = message;
    document.getElementById("popup").style.display = "block";
  }


  if (username === "" || password === "") {
    alert("Please fill in the details");
  } else {
    let loginSuccessful = false;
    for (let i = 0; i < UserData.length; i++) {
      if (
        username === UserData[i].username &&
        password === UserData[i].password
      ) {
        loginSuccessful = true;
        break;
      }
    }

    if (loginSuccessful) {
      showPopup("UserID and password matched. Login successful.");
      okbtn.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    } else {
      showPopup("UserID and password did not match. Please retry.");
      okbtn.addEventListener("click", () => {
        window.location.href = "login.html";
      });
    }
  }
});

document.body.appendChild(section);
section.appendChild(article);
article.appendChild(userlabel);
article.appendChild(username);
article.appendChild(userpass);
article.appendChild(password);
article.appendChild(loginbtn);
article.appendChild(newuser);
