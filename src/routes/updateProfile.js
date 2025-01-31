const express = require('express');
const router = express.Router();
const updateProfileAbout = require('../controllers/updateProfileController');

router.put('/:id', updateProfileAbout);

module.exports = router;