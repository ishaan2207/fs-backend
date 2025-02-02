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

const updateProfileSkill = async (req, res) => {
    const { _id } = req.params;
    const { skillId, skill, image, learntFrom } = req.body;
    const updatedSkill = {
        id: skillId,
        skill: skill,
        image: image,
        learntFrom: learntFrom,
    };
    try {
        const result = await ProfileInformation.updateOne(
            { _id: _id, 'skills.id': skillId },
            {
                $set: {
                    'skills.$': updatedSkill
                }
            }
        );
        res.status(200).json({ message: 'Successfully update profile skill.', result });
    } catch (err) {
        console.error('Error in updating profile skill: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { updateProfileAbout, updateProfileInfo, updateProfileSkill };