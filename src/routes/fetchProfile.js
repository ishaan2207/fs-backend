const express = require('express');
const router = express.Router();
const { fetchRecommendedProfiles, fetchProfileInformation } = require('../controllers/fetchProfileController');

router.get('/', fetchRecommendedProfiles);
router.get('/info', fetchProfileInformation);

module.exports = router;