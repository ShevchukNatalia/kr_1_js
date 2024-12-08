
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userContainer = document.getElementById('users');
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            userBlock.innerHTML = `<p>id: ${user.id}</p>
                                   <p>name: ${user.name}</p>
                                   <a href="/user_details.html?id=${user.id}">
                                   <button class="btn">Дивитись деталі</button>
                                   </a>`;
            userContainer.appendChild(userBlock);
        }
    })