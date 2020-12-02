// import express from 'express'
// import dotenv from 'dotenv'
// import morgan from 'morgan'
// import connectDB from './config/db'
// import colors from 'colors'
// import errorHandler from './middleware/error'
// import swaggerJSdoc from 'swagger-jsdoc'
// import swaggerUI from 'swagger-ui-express'

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const colors = require('colors')
const errorHandler = require('./middleware/error')
const swaggerJSdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express()

dotenv.config({ path: './config/config.env' })

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'HMS APIs',
      version: '1.0.0',
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    servers: [
      {
        url: 'https://localhost:5000',
        description: 'Development server',
      },
      {
        url: 'https://hms-md.herokuapp.com',
        description: 'Production server',
      },
    ],
  },
  components: {
    securitySchemes: {
      api_key: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header',
      },
    },
  },
  apis: ['routes/*.js'],
}

const swaggerDocs = swaggerJSdoc(swaggerOptions)
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, { explorer: true })
)

//api routes
import users from './routes/users'
import auth from './routes/auth'
import items from './routes/items'
import postJob from './routes/job'
import applyJobInformation from './routes/applyJob'

// connect to the database
// connectDB()

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

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    body: 'Welcome to hms v1',
  })
})
app.use('/api/v1/items', items)
app.use('/api/v1/users', users)
app.use('/api/v1/auth', auth)
app.use('/api/v1/postJob', postJob)
app.use('/api/v1/applyJob', applyJobInformation)

//for error hadnling
app.use(errorHandler)

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  //Close the server and exit the process
  server.close(() => process.exit(1))
})
