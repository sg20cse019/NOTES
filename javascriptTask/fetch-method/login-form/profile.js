document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(sessionStorage.getItem('selectedUser'));

    if (user) {
        const profileContainer = document.getElementById('profile-container');

        const avatar = document.createElement('img');
        avatar.className = 'avatar';
        avatar.src = user.avatar_url;
        profileContainer.appendChild(avatar);

        const name = document.createElement('h1');
        name.textContent = user.name || user.login; 
        profileContainer.appendChild(name);

        if (user.bio) {
            const bio = document.createElement('p');
            bio.textContent = user.bio;
            profileContainer.appendChild(bio);
        }

        if (user.followers) {
            const followers = document.createElement('p');
            followers.textContent = `Followers: ${user.followers}`;
            profileContainer.appendChild(followers);
        }

        if (user.following) {
            const following = document.createElement('p');
            following.textContent = `Following: ${user.following}`;
            profileContainer.appendChild(following);
        }

        sessionStorage.removeItem('selectedUser');
    } else {
        profileContainer.textContent = 'No user data available.';
    }
});
