const express = require('express');
const router = express.Router();
const deleteNetworkInvite = require('../controllers/deleteNetworkController');

router.delete('/:id', deleteNetworkInvite);

module.exports = router;