const ProfileInformation = require('../models/ProfileInformation');

const createProfileInformation = async (req, res) => {
    try {
        const { userId, name, image } = req.body;
        const newUser = new ProfileInformation({
            userId: userId,
            name: name,
            bio: 'New user bio',
            image: image,
        });

        await newUser.save();
        res.status(200).json({ message: 'New user created successfully: ', newUser });
    } catch (err) {
        console.error('Error in creating profile information: ', err);
        res.status(500).json({ error: 'Internal server error.' })
    }
}

module.exports = createProfileInformation;