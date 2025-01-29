const RecommendedProfile = require('../models/RecommendedProfile');

const fetchRecommendedProfiles = async (req, res) => {
    try {
        const recommendedProfiles = await RecommendedProfile.find();
        res.status(200).json(recommendedProfiles);
    } catch (err) {
        console.error('Error in fetching recommended profiles: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = fetchRecommendedProfiles;