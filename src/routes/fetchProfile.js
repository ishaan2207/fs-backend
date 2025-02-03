const express = require('express');
const router = express.Router();
const { fetchRecommendedProfiles, fetchProfileInformation, fetchProfileExperience, fetchProfileEducation } = require('../controllers/fetchProfileController');

router.get('/', fetchRecommendedProfiles);
router.get('/info/:id', fetchProfileInformation);
router.get('/experience', fetchProfileExperience);
router.get('/education', fetchProfileEducation);

module.exports = router;