import express from 'express'
import dotenv from 'dotenv'

import dbConnect from './utils/database'

import scriptRoute from './routes/script'
import healthRoute from './routes/health'
import testRoute from './routes/test'

dotenv.config()
const app = express()

dbConnect()
    .then(() => console.log('Database connected.'))
    .catch((err) => console.log('Error in database connection: ', err))

app.use('/', healthRoute)
app.use('/test', testRoute)
app.use('/script', scriptRoute)

app.listen(process.env.PORT, () => {
    console.log(`Mike Ross is up and running at PORT: ${process.env.PORT}`)
})