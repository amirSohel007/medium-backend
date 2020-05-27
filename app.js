const express = require('express')
const app = express()
const connectDB = require('./DB/connection')
const routes = require('./router/router')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8000

//Connect databse
connectDB()

//Application middleware 
app.use(bodyParser.json())
app.use('/', routes)

//Starting application
app.listen(PORT, ()=> console.log('Server up and running !'))

