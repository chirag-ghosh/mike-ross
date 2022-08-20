import express from "express";
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

export default router