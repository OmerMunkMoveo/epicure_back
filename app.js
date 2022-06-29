const express = require('express')
const app = express()
const router = require('./routers/mainRouter').router
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
// const url = 'mongodb://127.0.0.1:27017/epicure';
//This is a local url connection
const mongoose = require('mongoose')

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(() =>{
    // console.log(con.connections)
    console.log('DB connection successful')
}).catch(err=>{
    console.log(err)
})

app.use(cors())

app.use(express.json())

app.use((req, res, next) =>{
    req.requestTime = new Date().toISOString();
    next()
})


module.exports = {mongoose}

app.use("/api", router)
app.listen(8000)
