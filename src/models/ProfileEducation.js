const mongoose = require('mongoose');

const profileEducationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: 'https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg',
    },
    location: {
        type: String,
        required: true,
    },
    field: {
        type: String,
        required: true,
    },
    dates: {
        type: String,
        required: true,
    },
});

const ProfileEducation = mongoose.model('ProfileEducation', profileEducationSchema);

module.exports = ProfileEducation;