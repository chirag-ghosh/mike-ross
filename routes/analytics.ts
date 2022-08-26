import express from "express";
import Case from "../models/case";
const router = express.Router()

router.get('/advocate', (req: express.Request, res: express.Response) => {
    const advocateDetails = require(__dirname + "/../analytics_data/Advocate_details.json")
    res.json(advocateDetails)
})

router.get('/yearwise', async (req: express.Request, res: express.Response) => {
    const data: {
        disposed: {
            id: string,
            label: string,
            value: number
        }[], 
        pending: {
            id: string,
            label: string,
            value: number
        }[]
    } = {
        disposed: [],
        pending: []
    }
    for(var i = 2022; i >= 2018; i--) {
        data.disposed.push({id: i.toString(), label: i.toString(), value: await Case.count({year: i, caseType: 'Disposed'})})
        data.pending.push({id: i.toString(), label: i.toString(), value: await Case.count({year: i, caseType: 'Pending'})})
    }
    res.json(data)
})

router.get('/', (req: express.Request, res: express.Response) => {
    const totalStats = require(__dirname + "/../analytics_data/total_number_of_cases.json")
    res.json(totalStats)
})

export default router