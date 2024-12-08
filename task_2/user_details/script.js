
let params = new URLSearchParams(window.location.search);
let userId = params.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userDetails = document.getElementById('userDetails');
        createPElement('ID', `${user.id}`, userDetails);
        createPElement('Name', `${user.name}`, userDetails);
        createPElement('Email', `${user.email}`, userDetails);
        createPElement('Phone', `${user.phone}`, userDetails);
        createPElement('Website', `${user.website}`, userDetails);
        createPElement('Company', `${user.company.name}`, userDetails);
        createPElement('Address', `${user.address.street}, ${user.address.city}`, userDetails);
    })

let btnPost = document.getElementById('btnPosts');
btnPost.addEventListener('click',() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            let postContainer = document.getElementById('postContainer');
            for (let i = 0; i < posts.length; i++) {
                let post = posts[i];
                let  postBlock = document.createElement('div');
                postBlock.classList.add('post')
                let hElem= document.createElement('p');
                hElem.classList.add('text_content');
                hElem.appendChild(document.createTextNode(`${post.title}`));
                let link = document.createElement('a');
                link.href = `../post_details/index.html?postId=${post.id}`;
                let btn = document.createElement('button');
                btn.classList.add('details_btn');
                btn.appendChild(document.createTextNode('Дивитися пост'));
                link.appendChild(btn);
                postBlock.appendChild(hElem);
                postBlock.appendChild(link);
                postContainer.appendChild(postBlock);
            }
        })
})

 function createPElement(title, value, container){
    let pElem = document.createElement('p');
    pElem.appendChild(document.createTextNode(`${title}: ${value} `));
    container.appendChild(pElem);
}