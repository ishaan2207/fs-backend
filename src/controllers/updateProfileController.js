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

const updateProfileInfo = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        await ProfileInformation.findByIdAndUpdate(id, {
            name: body.name,
            pronouns: body.pronouns,
            bio: body.bio,
            location: body.location,
            universityName: body.universityName,
            image: body.image,
            bannerImg: body.bannerImg,
        });
        res.status(200).json({ message: 'Successfully updated profile information.' })
    } catch (err) {
        console.error('Error in updating profile about: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { updateProfileAbout, updateProfileInfo };