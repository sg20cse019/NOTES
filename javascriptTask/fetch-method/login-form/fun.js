let Url = "https://api.github.com/users";

function fetchData() {
  fetch(Url)
    .then((data) => data.json())
    .then((users) => {
      let userList = document.getElementById("user-list");
      users.forEach((user) => {
        let userCard = document.createElement("div");
        userCard.className = "user-card";
     
        userCard.addEventListener('click', function() {
          fetchUserProfile(user.login); 
        });

        let avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = user.avatar_url;

        let name = document.createElement("p");
        name.innerText = `Name: ${user.login}`;
        name.className = "name";

        userCard.appendChild(avatar);
        userCard.appendChild(name);

        userList.appendChild(userCard);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function fetchUserProfile(username) {
  
  let userUrl = `https://api.github.com/users/${username}`;

  fetch(userUrl)
    .then(response => response.json())
    .then(user => {
      sessionStorage.setItem('selectedUser', JSON.stringify(user));
      window.location.href = 'profile.html';
    })
    .catch(error => console.error('Error fetching user profile:', error));
}

fetchData();
