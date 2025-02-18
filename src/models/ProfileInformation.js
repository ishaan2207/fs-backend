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
        default: 'https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg',
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
        default: 0,
    },
    postImpressions: {
        type: Number,
        required: false,
        default: 0,
    },
    searchAppearances: {
        type: Number,
        required: false,
        default: 0,
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