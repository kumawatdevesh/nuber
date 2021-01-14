import mongoose from "mongoose";

const Chat = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
    participants: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

const chatSchema = mongoose.model('Chat', Chat);

export default chatSchema;