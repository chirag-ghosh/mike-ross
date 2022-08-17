import fs from 'fs'
import crypto from 'crypto'
import saveToMeilisearch from './meiliScript'

function addScrapedDataToMeili() {
    const caseTypes = fs.readdirSync(__dirname + "/../data")
    caseTypes.map((caseType) => {
        const years = fs.readdirSync(__dirname + "/../data/" + caseType)
        years.map((year) => {
            const cases = fs.readdirSync(__dirname + "/../data/" + caseType + "/" + year)
            cases.map((caseFolder) => {
                const caseDetails = require(__dirname + "/../data/" + caseType + "/" + year + "/" + caseFolder + "/Case_details.json")
                caseDetails.id = crypto.createHash('sha256').update(caseDetails.diary_number).digest('hex')
                try {
                    var extra = fs.readFileSync(__dirname + "/../data/" + caseType + "/" + year + "/" + caseFolder + "/Earlier_courts.html").toString()
                    caseDetails.earlier_court = extra
                }
                catch(err) {}
                try {
                    var extra = fs.readFileSync(__dirname + "/../data/" + caseType + "/" + year + "/" + caseFolder + "/Inter_locutary_applications.html").toString()
                    caseDetails.inter_locutary_applications = extra
                }
                catch(err) {}
                try {
                    var extra = fs.readFileSync(__dirname + "/../data/" + caseType + "/" + year + "/" + caseFolder + "/Judgement.html").toString()
                    caseDetails.judgement = extra
                }
                catch(err) {}
                try {
                    var extra = fs.readFileSync(__dirname + "/../data/" + caseType + "/" + year + "/" + caseFolder + "/Listing_dates.html").toString()
                    caseDetails.listing_dates = extra
                }
                catch(err) {}
                try {
                    var extra = fs.readFileSync(__dirname + "/../data/" + caseType + "/" + year + "/" + caseFolder + "/Notices.html").toString()
                    caseDetails.notices = extra
                }
                catch(err) {}
                saveToMeilisearch('cases', caseDetails)
            })
        })
    })
}

export default addScrapedDataToMeili