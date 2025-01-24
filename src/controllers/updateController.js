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

module.exports = updatePost;