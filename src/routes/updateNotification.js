const express = require('express');
const router = express.Router();
const updateNotification = require('../controllers/updateNotifsController');

router.put('/:id', updateNotification);

module.exports = router;