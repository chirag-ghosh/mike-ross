import express from 'express'
import dotenv from 'dotenv'

import testRoute from './routes/health'

dotenv.config()
const app = express()

app.use('/', testRoute)

app.listen(process.env.PORT, () => {
    console.log(`Mike Ross is up and running at PORT: ${process.env.PORT}`)
})