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

async function deletePost(id) {
    try {
        const response = await fetch(`${API_ENDPOINT}/delete-post/${id}`, {
            method: 'DELETE'
        });

        const data = await response.json();
        console.log('Data: ', data);
    } catch (err) {
        console.error('Error in deleting post: ', err);
    }
}

const deletePostButton = document.getElementById('deletePostButton');
deletePostButton.addEventListener('click', () => {
    deletePost('678e180cf03968929549fa09');
})

async function updatePost(id) {
    const formData = new FormData();
    formData.append('content', content = 'Updated content');
    try {
        const response = await fetch(`${API_ENDPOINT}/update-post/${id}`, {
            method: 'PUT',
            body: formData
        })

        const data = await response.json();
        console.log('Data: ', data);
    } catch (err) {
        console.error('Error in updating post: ', err);
    }
}

const updatePostButton = document.getElementById('updatePostButton');
updatePostButton.addEventListener('click', () => {
    updatePost('678e1829f03968929549fa0b');
})

document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
})