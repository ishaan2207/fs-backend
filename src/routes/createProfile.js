const express = require('express');
const router = express.Router();
const { createProfileExperience, createProfileEducation } = require('../controllers/createProfileController');

router.post('/experience', createProfileExperience);
router.post('/education', createProfileEducation);

module.exports = router;