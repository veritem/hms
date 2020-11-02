const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const colors = require('colors')
const app = express()
const customers = require('./routes/customer')


dotenv.config({ path: './config/config.env' })

// connect to the database
connectDB()


//body parser
app.use(express.json())


//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(
        `Serve is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .green
    );
});


app.use("/api/customers", customers)


process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //Close the server and exit the process
    server.close(() => process.exit(1));
});