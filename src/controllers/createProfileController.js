const ProfileExperience = require('../models/ProfileExperience');
const ProfileEducation = require('../models/ProfileEducation');
const ProfileInformation = require('../models/ProfileInformation');

const createProfileExperience = async (req, res) => {
    try {
        const experience = req.body;
        const newExperience = new ProfileExperience({
            userId: '1',
            title: experience.title,
            company: experience.company,
            location: experience.location,
            startDate: experience.startDate,
            endDate: experience.endDate,
            descriptions: experience.descriptions,
        });

        await newExperience.save();
        res.status(200).json({ message: 'New experience saved successfully.', newExperience });
    } catch (err) {
        console.error('Error in creating new profile experience: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

const createProfileEducation = async (req, res) => {
    try {
        const education = req.body;
        const newEducation = new ProfileEducation({
            userId: '1',
            location: education.location,
            field: education.field,
            dates: education.dates
        });

        await newEducation.save();
        res.status(200).json({ message: 'New education saved successfully.', newEducation });
    } catch (err) {
        console.error('Error in creating new profile education: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const createProfileSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { skill, image, learntFrom } = req.body;

        const updatedProfile = await ProfileInformation.findByIdAndUpdate(
            id,
            { $push: { skills: { skill, image, learntFrom } } },
            { new: true, runValidators: true }
        );

        res.status(200).json({ message: 'Skill successfully added.', updatedProfile });
    } catch (err) {
        console.error('Error in creating new profile skill: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { createProfileExperience, createProfileEducation, createProfileSkill };