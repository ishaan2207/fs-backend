const Message = require('../models/Message');

const updateMessage = async (req, res) => {
    const {id}  = req.params;
    const {text, timeSent, senderId, senderName} = req.body;
    const newMessage = {
        text: text,
        timeSent: timeSent,
        senderId: senderId,
        senderName: senderName,
    };
    try {
        const message = await Message.findByIdAndUpdate(id, { $push: {messages: newMessage}});
        res.status(200).json({message: 'Successfully added message to chat log: ', message});
    } catch (err) {
        console.error('Error in updating message: ', err);
        res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = updateMessage;