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
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    universityImg: {
        type: String,
        required: true,
    },
    bannerImg: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    numConnections: {
        type: String,
        required: true,
    },
    universityName: {
        type: String,
        required: true,
    },
    profileViews: {
        type: Number,
        required: true,
    },
    postImpressions: {
        type: Number,
        required: true,
    },
    searchAppearances: {
        type: Number,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
});

const ProfileInformation = mongoose.model('ProfileInformation', profileInformationSchema);

module.exports = ProfileInformation;