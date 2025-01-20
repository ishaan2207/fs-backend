const API_ENDPOINT = 'http://localhost:9999';

const createPostButton = document.getElementById('createPostButton');
createPostButton.addEventListener('click', () => {
    createNewPost();
})

async function createNewPost() {
    try {
        const response = await fetch(`${API_ENDPOINT}/create-post`, {
            method: 'POST',
        });

        const data = await response.json();
        console.log('Post creation done ', data);
    } catch (err) {
        console.log('Error in posting: ', err)
    }
}

async function fetchPosts() {
    try {
        const response = await fetch(`${API_ENDPOINT}/fetch-posts`);
        const data = await response.json();
        console.log('Fetch successful ', data);
    } catch (err) {
        console.log('Error in fetching: ', err)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
})