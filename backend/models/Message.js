const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String
    },
    mediaUrl: {
        type: String,
        default: null
    },
    mediaType: {
        type: String,
        enum: ['image', 'video', 'audio', 'file', 'text']
    },
    reaction: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            emoji: {
                type: String
            }
        }
    ],
    messageStatus: {
        type: String,
        enum: ['sent', 'delivered', 'read'],
        default: 'sent'
    }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;