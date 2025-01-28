const mongoose = require('mongoose');

const networkProfileSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    mutuals: {
        type: String,
        required: false,
    },
    numConnections: {
        type: Number,
        required: false,
    },
    bgrndImage: {
        type: String,
        required: false,
        default: 'https://media.licdn.com/dms/image/v2/D4D16AQEcYKac_Zcrww/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1716388453884?e=2147483647&v=beta&t=C2Qu-Ts1IwaGiNEpDbb6kiF5Gf3bDK9ykqlu81L8kwY'
    },
});

const NetworkProfile = mongoose.model('NetworkProfile', networkProfileSchema);

module.exports = NetworkProfile;