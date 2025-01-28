const NetworkInvite = require('../models/NetworkInvite');

const fetchNetworkInvites = async (req, res) => {
    try {
        const networkInvites = await NetworkInvite.find();
        res.status(200).json(networkInvites);
    } catch (err) {
        console.error('Error in fetching network invites: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = fetchNetworkInvites;