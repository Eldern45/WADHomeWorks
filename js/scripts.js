document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    // const uri = 'https://timur0108.github.io/WADkodutooAPI/myjson.json';
    const local = '/WADHomeWorks/res/json/myjson.json'
    // fetch(uri)
    fetch(local)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        data.posts.forEach(post => {
            const postElement = document.createElement('div');

            postElement.innerHTML = `
                <div class="data">
                    <img src="../res/images/human-icon-symbol-design-illustration-vector.jpg" alt="user img">
                    <p>${new Date(post.createTime).toLocaleString()}</p>
                </div>
                ${post.pictureUrl ? `<img src="${post.pictureUrl}" alt="Post image" class="post-image">` : ''}
                <p>${post.text}</p>
            `;

            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
