const express = require('express');
const router = express.Router();
const createProfileInformation = require('../controllers/createProfileInformationController');

router.post('/', createProfileInformation);

module.exports = router;