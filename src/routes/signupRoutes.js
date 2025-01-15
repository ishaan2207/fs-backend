const express = require('express');
const router = express.Router();

const { fetchAllUsers } = require('../controllers/fetchController');

router.get('/', fetchAllUsers);

module.exports = router;