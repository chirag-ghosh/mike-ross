import express from "express";
import MeiliSearch from "meilisearch";
import moment from "moment";
import Case from "../models/case";
const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
    if(typeof req.query.date === 'string') {
        const reqMoment = moment(req.query.date, "DD-MM-YYYY");
        if(!reqMoment.isValid()) {
            res.status(400).json({status: "Wrong date format"})
        }
        const cases = await Case.find({tentative_date: reqMoment.format("DD-MM-YYYY")})
        res.json({cases})
    }
    else {
        res.status(400).json({status: "Date missing"})
    }
})

router.get('/upcoming', async (req: express.Request, res: express.Response) => {
    const data = []
    for(var i = 0; i < 7; i++) {
        const searchDate = moment().add(i, 'days').format("DD-MM-YYYY")
        const casesCount = await Case.count({tentative_date: searchDate})
        if(casesCount !== 0) {
            data.push({
                date: searchDate,
                count: casesCount
            })
        }
    }
    res.json({data})
})

router.get('/search', async (req: express.Request, res: express.Response) => {
    const query = req.query.query
    const client = new MeiliSearch({
        host: process.env.MEILI_URL || '',
        apiKey: process.env.MEILI_KEY || ''
    })
    try {
        const results = await client.index('cases').search(typeof query === 'string' ? query : "");
        res.json(results)
    }
    catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:hash', async (req: express.Request, res: express.Response) => {
    const hash = req.params.hash
    const caseDetail = await Case.findOne({hash: hash})
    if(caseDetail === null) res.status(404).json({error: "Case not found"})
    else res.json({caseDetail})
})

export default router