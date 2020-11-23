import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db'
import colors from 'colors'
import errorHandler from './middleware/error'
import swaggerJSdoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app = express()

dotenv.config({ path: './config/config.env' })

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'HMS API',
      version: '1.0.0',
    },
  },
  apis: ['routes/*.js'],
}

const swaggerDocs = swaggerJSdoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

//api routes
import users, { post } from './routes/users'
import auth from './routes/auth'
import items from './routes/items'
import postJob from './routes/job'
import applyJob from './controllers/applyJob'
import applyJobInformation from './routes/applyJob'

// connect to the database
connectDB()

//body parser
app.use(express.json())

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .green
    )
})
app.use('/api/v1/items',items)
app.use('/api/v1/users', users)
app.use('/api/v1/auth', auth)
app.use('/api/v1/applyJob',applyJob.router)
app.use('/api/v1/postJob',postJob)
app.use('/api/v1/applyJobInformation',applyJobInformation);

//for error hadnling
app.use(errorHandler)

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
        //Close the server and exit the process
    server.close(() => process.exit(1))
})