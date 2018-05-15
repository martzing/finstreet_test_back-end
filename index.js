const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express()

app.use(cors())

// set file to public
app.use(express.static(`${__dirname}/public`))

// connect to mongodb
mongoose.connect('mongodb://localhost/finstreest_test')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

// init routes
app.use('/api',require('./routes/api'))

// error handling middleware

app.use((err, req, res, next) => {
  res.send({status:false, error: err.message})
})

app.listen(process.env.port || 4000, () => {
  console.log('Start server at port 4000.')
})