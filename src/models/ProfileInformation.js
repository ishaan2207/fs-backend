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
        default: '',
    },
    bio: {
        type: String,
        required: true,
        default: '',
    },
    location: {
        type: String,
        required: false,
        default: '',
    },
    image: {
        type: String,
        required: true,
    },
    universityImg: {
        type: String,
        required: false,
        default: 'https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg',
    },
    bannerImg: {
        type: String,
        required: false,
        default: 'https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg',
    },
    contactInfo: {
        type: String,
        required: false,
        default: 'Contact Info'
    },
    numConnections: {
        type: String,
        required: false,
        default: '0 connections'
    },
    universityName: {
        type: String,
        required: false,
        default: '',
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
        default: '',
    },
    skills: {
        type: Array,
        required: false,
        default: [],
    },
});

const ProfileInformation = mongoose.model('ProfileInformation', profileInformationSchema);

module.exports = ProfileInformation;