const express = require('express');
const router = express.Router();
const { fetchRecommendedProfiles, fetchProfileInformation, fetchProfileExperience } = require('../controllers/fetchProfileController');

router.get('/', fetchRecommendedProfiles);
router.get('/info', fetchProfileInformation);
router.get('/experience', fetchProfileExperience);

module.exports = router;