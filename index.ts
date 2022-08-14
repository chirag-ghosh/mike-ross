import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    res.json({
        'PBL': 'Up and Running!'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Mike Ross is up and running at PORT: ${process.env.PORT}`)
})