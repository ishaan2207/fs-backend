const Notification = require('../models/Notification');

const deleteNotification = async (req, res) => {
    const { id } = req.params;
    try {
        await Notification.findByIdAndDelete(id);
        res.status(200).json({ message: 'Deleted notification successfully.' });
    } catch (err) {
        console.error('Error in deleting notification: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = deleteNotification;