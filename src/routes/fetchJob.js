const express = require('express');
const router = express.Router();
const fetchJobs = require('../controllers/fetchJobController');

router.get('/', fetchJobs);

module.exports = router;