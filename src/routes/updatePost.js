const express = require('express');
const router = express.Router();
const updatePost = require('../controllers/updateController');

router.put('/:id', updatePost);

module.exports = router;