const mongoose = require('mongoose')

const userShemaTypes = new mongoose.Schema({
    name:{
        type:string,
        require: [true, 'Please name is required']
    },
     createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userShemaTypes);
