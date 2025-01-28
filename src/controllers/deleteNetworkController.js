const NetworkInvite = require('../models/NetworkInvite');
const NetworkProfile = require('../models/NetworkProfile');

const deleteNetworkInvite = async (req, res) => {
    const { id } = req.params;
    try {
        await NetworkInvite.findByIdAndDelete(id);
        res.status(200).json({ message: 'Network invite deleted successfully.' });
    } catch (err) {
        console.error('Error in deleting network invite: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const deleteNetworkProfile = async (req, res) => {
    const { id } = req.params;
    try {
        await NetworkProfile.findByIdAndDelete(id);
        res.status(200).json({ message: 'Network profile deleted successfully.' });
    } catch (err) {
        console.error('Error in deleting network profile: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { deleteNetworkInvite, deleteNetworkProfile };