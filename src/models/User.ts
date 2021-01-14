import mongoose from 'mongoose';

const User = new mongoose.Schema({
    email: {
        type: String
    },
    verifiedEmail: {
        type: Boolean
    },
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    age: {
        type: Number
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    verifiedPhoneNumber: {
        type: String
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    },
    fullName: {
        type: String
    },
    isDriving: {
        type: Boolean
    },
    isRiding: {
        type: Boolean
    },
    isTaken: {
        type: Boolean
    },
    lastLng: {
        type: Number
    },
    lastLat: {
        type: Number
    },
    lastOrientation: {
        type: Number
    },
    fbId: {
        type: String
    }
});

const userModel = mongoose.model('User', User);

export default userModel;

