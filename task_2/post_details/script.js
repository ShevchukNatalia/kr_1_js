
    let urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get('postId');
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
    const postDetails = document.getElementById('postDetails');
        createPElement('PostId', `${post.id}`, postDetails);
        createPElement('Title', `${post.title}`, postDetails);
        createPElement('Post', `${post.body}`, postDetails);
});

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
    const commentsContainer = document.getElementById('commentsContainer');
    for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment');
     Object.entries(comment).forEach(([key, value])=>{
         createPElement(`${key}`, `${value}`, commentBlock);
         commentsContainer.appendChild(commentBlock);
     })
}
});

 function createPElement(title, value, container){
        let pElem = document.createElement('p');
        pElem.appendChild(document.createTextNode(`${title}: ${value} `));
        container.appendChild(pElem);
    }