const express = require('express');
const router = express.Router();
const fetchNotifications = require('../controllers/fetchNotifsController');

router.get('/', fetchNotifications);

module.exports = router;