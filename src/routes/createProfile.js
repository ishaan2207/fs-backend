const express = require('express');
const router = express.Router();
const { createProfileExperience, createProfileEducation, createProfileSkill } = require('../controllers/createProfileController');

router.post('/experience', createProfileExperience);
router.post('/education', createProfileEducation);
router.post('/skill/:id', createProfileSkill);

module.exports = router;