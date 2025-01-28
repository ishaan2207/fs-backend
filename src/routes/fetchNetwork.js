const express = require('express');
const router = express.Router();
const fetchNetworkInvites = require('../controllers/fetchNetworkController');

router.get('/', fetchNetworkInvites);

module.exports = router;