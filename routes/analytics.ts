import express from "express";
const router = express.Router()

router.get('/advocate', (req: express.Request, res: express.Response) => {
    const advocateDetails = require(__dirname + "/../analytics_data/Advocate_details.json")
    res.json(advocateDetails)
})

export default router