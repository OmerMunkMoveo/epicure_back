const express = require('express')
const app = express()
const router = require('./routers/mainRouter').router

const url = 'mongodb://127.0.0.1:27017/epicure';
const mongoose = require('mongoose')

mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, () => console.log('connected'))


app.use(express.json())


module.exports = {mongoose}

app.use("/api", router)
app.listen(3000)
