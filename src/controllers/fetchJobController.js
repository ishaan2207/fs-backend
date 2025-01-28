const Job = require('../models/Job');

const fetchJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (err) {
        console.error('Error in fetching jobs: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = fetchJobs;