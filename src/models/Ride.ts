import mongoose from "mongoose";

const Ride = new mongoose.Schema({
    status: {
        required: true,
        type: String
    },
    pickUpAddress: {
        type: String,
        required: true
    },
    pickUplat: {
        required: true,
        type: Number
    },
    pickUplng: {
        required: true,
        type: Number
    },
    dropOffAddress: {
        required: true,
        type: String
    },
    dropOfflat: {
        required: true,
        type: Number
    },
    dropOfflng: {
        required: true,
        type: Number
    },
    price: {
        required: true,
        type: Number
    },
    duration: {
        required: true,
        type: String
    }
}, { timestamps: true });

const rideSchema = mongoose.model('Ride', Ride);

export default rideSchema;