import mongoose, { Schema } from 'mongoose'

const applyJobSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'Please insert a job name']
  },
  last_name: {
    type: String,
    required: [true, 'Please the job category is required']
  },
  email: {
    type: String,
    required: [true, 'Please add the industries field']
  },
  jobName: {
    type: mongoose.Schema.Types.ObjectId,
		ref: 'Job',
		unique: true,
		required: true,
  },
  jobId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job'
  },
  region: {
    type: String,
    required: [true,'Please add the region of the work']
  },
  cv : {
    type: String,
    data: Buffer
  }
})

module.exports = mongoose.model('applyJob', applyJobSchema)
