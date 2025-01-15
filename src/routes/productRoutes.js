const express = require('express');
const router = express.Router();

const { fetchAllProducts } = require('../controllers/fetchController');

router.get('/', fetchAllProducts);

module.exports = router;