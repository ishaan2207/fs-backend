const mongoose = require('mongoose');

const profileExperienceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    companyImage: {
        type: String,
        required: true,
        default: 'https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg',
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    descriptions: {
        type: Array,
        required: true,
    },
})

const ProfileExperience = mongoose.model('ProfileExperience', profileExperienceSchema);

module.exports = ProfileExperience;