const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    messages: {
        type: Array,
        required: true,
    }, 
    user1: {
        type: Object,
        required: true,
    },
    user2: {
        type: Object,
        required: true,
    },
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;