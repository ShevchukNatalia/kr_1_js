
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userContainer = document.getElementById('users');
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            let pId= document.createElement('p');
            pId.appendChild( document.createTextNode(`id: ${user.id}`));
            let pName= document.createElement('p');
            pName.appendChild( document.createTextNode(`name: ${user.name}`));
            let link = document.createElement('a');
            link.href = `./user_details/index.html?id=${user.id}`;
            let btn = document.createElement('button');
            btn.classList.add("btn");
            btn.appendChild(document.createTextNode('Дивитись деталі'));
            link.appendChild(btn);
            userBlock.appendChild(pId);
            userBlock.appendChild(pName);
            userBlock.appendChild(link);
            userContainer.appendChild(userBlock);
        }
    })