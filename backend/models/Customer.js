const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customer_names: {
        type: String,
        require: [true, 'Please name is required']
    },
    cutomer_phone_number: {
        type: Number,
        require: [true, 'Please phone number is required']
    },
    customer_location: {
        type: String,
        require: [true, "Please customer location is required                                                                                "]
    },
    customer_email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    customer_password: {
        type: String,
        require: [true, 'Please add a password']
    },
    customer_gender: {
        type: String,
        require: [true, "Please add an employee gender"]
    },
    customer_national_id: {
        type: String,
        require: [true, "Please add a national id "]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Customer',
    customerSchema);