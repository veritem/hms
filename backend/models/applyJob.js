import mongoose, { Schema } from 'mongoose'

const jobSchema = new Schema({
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
  employment_type: {
    type: String,
    enum: [
      'full-time',
      'part-time',
      'casual',
      'fixed-term',
      'shift-workers',
      'daily-hire-and-weekly-hire',
      'probation',
      'apprentices-and-trainees',
      'out-workers'
    ]
  },
  region: {
    type: String,
    required: [true,'Please add the region of the work']
  },
  experience_level: {
    type: String,
    required: [true,'Please add the experience level']
  },
  education_level: {
    type: String,
    required: [true,'Please add the education level']
  },
  number_of_positions: {
    type: String,
    required: [true, 'Please add the number of positions']
  }
})

module.exports = mongoose.model('Job', jobSchema)
