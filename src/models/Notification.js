const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        required: true,
    }
})

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;