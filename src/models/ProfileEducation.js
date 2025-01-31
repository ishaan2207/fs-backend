const mongoose = require('mongoose');

const profileEducationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
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