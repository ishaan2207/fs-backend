const express = require('express');
const router = express.Router();
const deleteNotification = require('../controllers/deleteNotifsController');

router.delete('/:id', deleteNotification);

module.exports = router;