const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    firstName:{
        type:string,
        require: [true, 'Please name is required']
    },
    lastName:{
                type:string,
        require: [true, 'Please name is required']
    },
    email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
    },
     createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('User',
userShema);
