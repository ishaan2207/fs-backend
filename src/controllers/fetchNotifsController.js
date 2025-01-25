const Notification = require('../models/Notification');

const fetchNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (err) {
        console.error('Error in fetching notifications, ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = fetchNotifications;

