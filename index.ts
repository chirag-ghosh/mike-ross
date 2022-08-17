import express from 'express'
import dotenv from 'dotenv'

import dbConnect from './utils/database'

import healthRoute from './routes/health'
import testRoute from './routes/test'
import addScrapedDataToMeili from './utils/addScrapedDataToMeili'

dotenv.config()
// const app = express()

// dbConnect()
//     .then(() => console.log('Database connected.'))
//     .catch((err) => console.log('Error in database connection: ', err))

// app.use('/', healthRoute)
// app.use('/test', testRoute)

// app.listen(process.env.PORT, () => {
//     console.log(`Mike Ross is up and running at PORT: ${process.env.PORT}`)
// })

addScrapedDataToMeili()