import mongoose from 'mongoose';

const Verification = new mongoose.Schema({
    target: {
        type: String
    },
    key: {
        type: String,
        required: true
    },
    payload: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const verificationSchema = mongoose.model('Verification', Verification);

export default verificationSchema;