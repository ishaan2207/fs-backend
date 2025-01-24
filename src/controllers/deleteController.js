const Post = require('../models/Post');

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await Post.deleteOne({ postId: id });

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error('Error in deleting post: ', err);
        res.status(500).json('Internal server error.');
    }
};

module.exports = deletePost;