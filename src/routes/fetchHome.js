const express = require('express');
const router = express.Router();
const fetchTrendingNow = require('../controllers/fetchHomeController');

router.get('/', fetchTrendingNow);

module.exports = router;