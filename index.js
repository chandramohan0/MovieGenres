const mongoose = require('mongoose')
const express = require('express')
const genres = require('./routes/genres')
const customers = require('./routes/customers')
const app = express()

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/genres')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MonogDB...', err))

app.use(express.json())
app.use('/api/genres', genres)
app.use('/api/customers', customers)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));