const express = require('express')
const app = express()
const timer = require('./middleware/timer.js')

app.use(timer)
app.get('/')
app.listen(8080)