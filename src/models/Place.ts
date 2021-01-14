import mongoose from "mongoose";

const Place = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    lat: {
        required: true,
        type: Number
    },
    lng: {
        required: true,
        type: Number
    },
    address: {
        required: true,
        type: String
    },
    isFav: {
        required: true,
        type: Boolean
    },
    user: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const placeSchema = mongoose.model('Place', Place);

export default placeSchema;