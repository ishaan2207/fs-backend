const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const createRoutes = require('./routes/createPost');
const fetchRoutes = require('./routes/fetchPost');
const deleteRoutes = require('./routes/deletePost');
const updateRoutes = require('./routes/updatePost');

const app = express();
const PORT = 3000;

const MONGODB_URI = 'mongodb+srv://ishaangupta02:w4X40GBeJ62Ik1Nn@linkedinbackend.nfhb4.mongodb.net/?retryWrites=true&w=majority&appName=LinkedinBackend';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    });

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/create-post', createRoutes);
app.use('/fetch-posts', fetchRoutes);
app.use('/delete-post', deleteRoutes);
app.use('/update-post', updateRoutes);

app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});

//ishaangupta02
//w4X40GBeJ62Ik1Nn