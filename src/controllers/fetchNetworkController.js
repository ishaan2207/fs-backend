const NetworkInvite = require('../models/NetworkInvite');
const NetworkProfile = require('../models/NetworkProfile');

const fetchNetworkInvites = async (req, res) => {
    try {
        const networkInvites = await NetworkInvite.find();
        res.status(200).json(networkInvites);
    } catch (err) {
        console.error('Error in fetching network invites: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const fetchNetworkProfiles = async (req, res) => {
    try {
        const networkProfiles = await NetworkProfile.find();
        res.status(200).json(networkProfiles);
    } catch (err) {
        console.error('Error in fetching network profiles: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { fetchNetworkInvites, fetchNetworkProfiles };