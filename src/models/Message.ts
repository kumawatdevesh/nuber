import mongoose from "mongoose";

const Message = new mongoose.Schema({
    text: {
        required: true,
        type: String
    },
    chat: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    },
    user: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const messageSchema = mongoose.model('Message', Message);

export default messageSchema;