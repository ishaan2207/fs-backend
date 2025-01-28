const mongoose = require('mongoose');

const networkInviteSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    mutuals: {
        type: String,
        required: true,
    },
})

const NetworkInvite = mongoose.model('NetworkInvite', networkInviteSchema);

module.exports = NetworkInvite;