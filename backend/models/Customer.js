const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    employee_names: {
        type: string,
        require: [true, 'Please name is required']
    },
    employee_phone_nbr: {
        type: number,
        require: [true, 'Please phone number is required']
    },
    employee_email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    employee_password: {
        type: String,
        require: [true, 'Please add a password']
    },
    employee_role: {
        type: String,
        require: [true, "Please add an employee"]
    },
    employee_gender: {
        type: String,
        require: [true, "Please add an employee gender"]
    },
    employee_national_id: {
        type: string,
        require: [true, "Please add a national id "]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'PENDING'],
        default: 'ACTIVE'
    }
})


module.exports = mongoose.model('Customer',
    customerSchema);