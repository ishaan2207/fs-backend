const express = require('express');
const router = express.Router();
const fetchRecommendedProfiles = require('../controllers/fetchProfileController');

router.get('/', fetchRecommendedProfiles);

module.exports = router;