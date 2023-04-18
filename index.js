const express = require('express')
const app = express()
const router = require('./router/route')
const ConnectDb = require('./database/db')
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api', router)

app.get('/', (resq, resp) =>{
    resp.status(404).json({
        "message": "Route not found"
    })
})

app.get('/api', (resq, resp) =>{
    resp.status(200).send("Welcome to Api provider 😄. The Routes are  {  /:country, /:country/:gender } ")
})


app.listen(4000, () =>{
    ConnectDb()
    console.log("Server is running...")
})