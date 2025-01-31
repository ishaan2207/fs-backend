const ProfileInformation = require('../models/ProfileInformation');

const updateProfileAbout = async (req, res) => {
    const { id } = req.params;
    const about = req.body.about;
    try {
        await ProfileInformation.findByIdAndUpdate(id, { about: about });
        res.status(200).json({ message: 'Successfully updated profile about.' })
    } catch (err) {
        console.error('Error in updating profile about: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = updateProfileAbout;