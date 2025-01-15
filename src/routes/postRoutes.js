const express = require('express');
const router = express.Router();

const { fetchAllPosts } = require('../controllers/fetchController');

router.get('/', fetchAllPosts);

module.exports = router;