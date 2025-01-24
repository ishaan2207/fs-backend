const Post = require('../models/Post');

const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findOne({ postId: id });

        post.postContent = req.body.postContent;

        await post.save();
        res.status(200).json({ message: "Post updated successfully." });
    } catch (err) {
        console.error("Error in updating post: ", err);
        res.status(500).json("Internal server error.");
    }
}

const updateLike = async (req, res) => {
    const { id } = req.params;
    const { likedByUser } = req.body;
    try {
        const post = await Post.findOne({ postId: id });

        if (!likedByUser) {
            post.likes = post.likes + 1;
        } else {
            post.likes = post.likes - 1;
        }

        await post.save();
        res.status(200).json({ message: 'Likes updated successfully.' });
    } catch (err) {
        console.error('Error in updating likes: ', err);
        res.status(500).json('Internal server error.');
    }
}

module.exports = { updatePost, updateLike };