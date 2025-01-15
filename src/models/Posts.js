const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        postedBy: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        datePosted: {
            type: Data,
            default: Date.now
        },
        likes: {
            type: Number,
            required: true
        },
        comments: {
            type: Number,
            required: true
        },
        shares: {
            type: Number,
            required: true
        }
    }
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;