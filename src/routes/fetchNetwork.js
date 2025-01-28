const express = require('express');
const router = express.Router();
const { fetchNetworkInvites, fetchNetworkProfiles } = require('../controllers/fetchNetworkController');

router.get('/', fetchNetworkInvites);
router.get('/profiles', fetchNetworkProfiles);

module.exports = router;