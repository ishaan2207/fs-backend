const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signupRoutes = require('./routes/signupRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 9999;

app.use(express.json());

app.use('/signup', signupRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});