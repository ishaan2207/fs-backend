const express = require('express');
const router = express.Router();
const { updateProfileAbout, updateProfileInfo } = require('../controllers/updateProfileController');

router.put('/:id', updateProfileInfo)
router.put('/about/:id', updateProfileAbout);

module.exports = router;