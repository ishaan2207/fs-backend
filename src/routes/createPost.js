const express = require('express');
const router = express.Router();
const createPost = require('../controllers/createPostController');

router.post('/', createPost);

module.exports = router;