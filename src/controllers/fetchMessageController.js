const Message = require('../models/Message');

const fetchMessages = async (req, res) => {
    const {userId} = req.params;
    try {
        const messages = await Message.find({$or: [{'user1.userId': userId}, {'user2.userId': userId}]});
        res.status(200).json(messages);
    } catch(err) {
        console.error('Error in fetching messages: ', err);
        res.status(500).json({error: 'Internal server error.'});
    }
}

module.exports = fetchMessages;