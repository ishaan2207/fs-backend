const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    }
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;