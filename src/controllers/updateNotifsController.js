const Notifications = require('../models/Notification');

const updateNotification = async (req, res) => {
    const { id } = req.params;
    try {
        const notification = await Notifications.findById(id);
        notification.read = true;
        await notification.save();
        res.status(200).json({ message: `Notification udpated successfully: ${notification}` });
    } catch (err) {
        console.error('Error in updating notification: ', err);
        res.status(500).json({ error: 'Internal server errror.' });
    }
}

module.exports = updateNotification;