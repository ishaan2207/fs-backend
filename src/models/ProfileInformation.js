const mongoose = require('mongoose');

const profileInformationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    pronouns: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
    universityImg: {
        type: String,
        required: false,
    },
    bannerImg: {
        type: String,
        required: false,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO4NTgozMqDIV_y1ocNZh86IVhYPVsII76Q&s',
    },
    contactInfo: {
        type: String,
        required: false,
    },
    numConnections: {
        type: String,
        required: false,
    },
    universityName: {
        type: String,
        required: false,
    },
    profileViews: {
        type: Number,
        required: false,
    },
    postImpressions: {
        type: Number,
        required: false,
    },
    searchAppearances: {
        type: Number,
        required: false,
    },
    about: {
        type: String,
        required: false,
    },
    skills: {
        type: Array,
        required: false,
    },
});

const ProfileInformation = mongoose.model('ProfileInformation', profileInformationSchema);

module.exports = ProfileInformation;