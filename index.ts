import express from 'express'

const app = express()

const PORT = 5000

app.get('/', (req: express.Request, res: express.Response) => {
    res.json({
        'PBL': 'Up and Running!'
    })
})

app.listen(PORT, () => {
    console.log(`Mike Ross is up and running at PORT: ${PORT}`)
})