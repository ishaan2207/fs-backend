const RecommendedProfile = require('../models/RecommendedProfile');
const ProfileInformation = require('../models/ProfileInformation');
const ProfileExperience = require('../models/ProfileExperience');

const fetchRecommendedProfiles = async (req, res) => {
    try {
        const recommendedProfiles = await RecommendedProfile.find();
        res.status(200).json(recommendedProfiles);
    } catch (err) {
        console.error('Error in fetching recommended profiles: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

const fetchProfileInformation = async (req, res) => {
    try {
        const profileInformation = await ProfileInformation.find();
        res.status(200).json(profileInformation);
    } catch (err) {
        console.error('Error in fetching profile information: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

const fetchProfileExperience = async (req, res) => {
    try {
        const profileExperience = await ProfileExperience.find();
        res.status(200).json(profileExperience);
    } catch (err) {
        console.error('Error in fetching profile experience: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = { fetchRecommendedProfiles, fetchProfileInformation, fetchProfileExperience };