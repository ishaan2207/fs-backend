const express = require('express');
const router = express.Router();
const updateMessage = require('../controllers/updateMessageController');

router.put('/:id', updateMessage);

module.exports = router;