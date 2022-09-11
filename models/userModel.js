const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        match: [/^[0-9]{10}$/, 'Please fill a valid phone number'],
    },
    resetlink: {
        data: String,
        default: ''
    }
}, { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

