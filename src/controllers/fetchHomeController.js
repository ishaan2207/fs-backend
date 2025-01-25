const TrendingNow = require('../models/TrendingNow');

const fetchTrendingNow = async (req, res) => {
    try {
        const allTrendingNow = await TrendingNow.find().sort({ readers: -1 });
        res.status(200).json(allTrendingNow);
    } catch (err) {
        console.error('Error in fetching trending topics: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = fetchTrendingNow;