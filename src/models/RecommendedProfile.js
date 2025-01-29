const mongoose = require('mongoose');

const recommendedProfileSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: true,
    },
    connected: {
        type: Boolean,
        required: true,
    },
})

const RecommendedProfile = mongoose.model('RecommendedProfile', recommendedProfileSchema);

module.exports = RecommendedProfile;