require('dotenv').config()
const express = require("express")
const sequelize = require('./db')
const models = require('./models/models')
const router = require("./Routers/MainRouter")
const cors = require("cors")
const errorHandler = require("./middleware/ErrorHandLingMiddleware")
const port = process.env.SERVER_PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", router)

app.use(errorHandler)

const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        }) 
    } catch (e) {
        console.log(e)
    }
}

start()
