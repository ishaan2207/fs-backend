const express = require('express');
const router = express.Router();
const fetchMessages = require('../controllers/fetchMessageController');

router.get('/:userId', fetchMessages);

module.exports = router;