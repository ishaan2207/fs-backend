const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
        const newPost = new Post({
            postId: 1,
            postedBy: "Ishaan Gupta",
            postContent: "Excited to announce that I’ve joined ABC Corp as the new Director of Marketing. Looking forward to new challenges and growth!",
            createdAt: "2024-12-01T10:00:00Z",
            likes: 120,
            comments: 45,
            shares: 18,
            userId: 1
        });

        await newPost.save();
        res.status(200).json({ message: 'Post saved successfully', newPost });
    } catch (error) {
        console.log('Error while posting: ', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = createPost;