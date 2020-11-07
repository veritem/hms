import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db'
import colors from 'colors'
import errorHandler from './middleware/error'

const app = express()

dotenv.config({ path: './config/config.env' })

//api routes
import users from './routes/users'
import customer from './routes/customer'

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

// give api endpoints to routes
app.use('/api/v1/users', users);
app.use('/api/v1/customers', customer);
//for error hadnling
app.use(errorHandler)

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
        //Close the server and exit the process
    server.close(() => process.exit(1))
})