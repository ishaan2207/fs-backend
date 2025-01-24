const mongoose = require('mongoose');

const trendingNowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
        default: '4h ago',
    },
    readers: {
        type: Number,
        required: true,
    },
})

const TrendingNow = mongoose.model('TrendingNow', trendingNowSchema);

module.exports = TrendingNow;