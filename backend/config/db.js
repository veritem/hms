const mongoose = require('mongoose')

const connectDb = async () => {
  console.log(process.env.MONGO_URI)
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log(
    `MongoDb connected ${connection.connection.host}`.cyan.italic.underline.bold
  )
}

module.exports = connectDb
