const express = require('express');
const router = express.Router();
const { updatePost, updateLike } = require('../controllers/updateController');

router.put('/:id', updatePost);
router.put('/:id/like', updateLike);

module.exports = router;