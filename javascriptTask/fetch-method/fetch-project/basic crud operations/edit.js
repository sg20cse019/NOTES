// Function to get the ID from the URL
function getIDURL() {
    let query = window.location.search;
    let obj = new URLSearchParams(query);
    let id = obj.get("id");
    return id;
  }
  
  // Function to fetch the user data
  function fetchData() {
    let id = getIDURL();
  
    fetch(`http://localhost:3000/profiles/${id}`)
      .then((response) => response.json())
      .then((user) => {
        document.getElementById('name').value = user.name;
        document.getElementById('company').value = user.company;
        document.getElementById('salary').value = user.salary;
      })
      .catch((error) => console.error('Error:', error));
  }
  
  // Call fetchData when the page loads
  document.addEventListener('DOMContentLoaded', fetchData);
  
  // Function to handle the form submission and update the user data
  function updateUserData(event) {
    event.preventDefault();
    let id = getIDURL();
  
    const updatedUser = {
      name: document.getElementById('name').value,
      company: document.getElementById('company').value,
      salary: document.getElementById('salary').value
    };
  
    fetch(`http://localhost:3000/profiles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUser),
    })
    .then((response) => response.json())
    .then(() => {
      console.log('User updated successfully');
      window.location.href = 'profiles.html';
       // Redirect back to the profiles page
    })
    .catch((error) => console.error('Error:', error));
  }
  
  // Add the event listener to the form
  document.getElementById('edit-form').addEventListener('submit', updateUserData);
  