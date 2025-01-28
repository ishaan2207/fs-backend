const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const createRoutes = require('./routes/createPost');
const fetchRoutes = require('./routes/fetchPost');
const deleteRoutes = require('./routes/deletePost');
const updateRoutes = require('./routes/updatePost');

const fetchTrendingRoute = require('./routes/fetchHome');

const fetchNotifsRoute = require('./routes/fetchNotification');
const updateNotifsRoute = require('./routes/updateNotification');

const fetchJobsRoute = require('./routes/fetchJob');

const fetchNetworkRoute = require('./routes/fetchNetwork');

const app = express();
const PORT = 9999;

const MONGODB_URI = 'mongodb+srv://ishaangupta02:w4X40GBeJ62Ik1Nn@linkedinbackend.nfhb4.mongodb.net/?retryWrites=true&w=majority&appName=LinkedinBackend';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((error) => {
        console.error("Error connecting to MongoDB: ", error);
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

app.use('/fetch-trending', fetchTrendingRoute);

app.use('/fetch-notifs', fetchNotifsRoute);
app.use('/update-notifs', updateNotifsRoute);

app.use('/fetch-jobs', fetchJobsRoute);

app.use('/fetch-network', fetchNetworkRoute);

app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});

//ishaangupta02
//w4X40GBeJ62Ik1Nn