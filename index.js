const express = require('express')
const app = express()
const port = 3050
const router = require('./config/route')
const setupDB = require('./config/database') 
const cors = require('cors')
app.use(cors())
app.use(express.json())
setupDB()
app.use('/',router)

app.listen(port,()=>{
    console.log('Listening to',port)
})