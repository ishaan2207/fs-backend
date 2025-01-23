const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new Post({
            postId: post.postId,
            postedBy: post.postedBy,
            postContent: post.postContent,
            userId: post.userId,
        });

        await newPost.save();
        res.status(200).json({ message: 'Post saved successfully', newPost });
    } catch (error) {
        console.log('Error while posting: ', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = createPost;