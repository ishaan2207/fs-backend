const express = require('express');
const router = express.Router();
const { deleteNetworkInvite, deleteNetworkProfile } = require('../controllers/deleteNetworkController');

router.delete('/:id', deleteNetworkInvite);
router.delete('/profile/:id', deleteNetworkProfile);

module.exports = router;