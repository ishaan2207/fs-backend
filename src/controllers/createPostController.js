const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
        const newPost = new Post({
            id: 1,
            content: 'Hello, this is my first post.'
        });

        await newPost.save();
        res.status(200).json({ message: 'Post saved successfully', newPost });
    } catch (error) {
        console.log('Error while posting: ', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = createPost;