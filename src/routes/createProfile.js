const express = require('express');
const router = express.Router();
const { createProfileExperience } = require('../controllers/createProfileController');

router.post('/experience', createProfileExperience);

module.exports = router;