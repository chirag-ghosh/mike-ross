import { model, Schema } from "mongoose";

interface CaseType {
    hash: string;
    diary_number: string;
    filed_on?: string;
    slp_no?: string;
    registered_on?: string;
    verified_on?: string;
    last_listed_on?: string;
    last_hearing_judges?: string;
    status?: string;
    tentative_date?: string;
    category?: string;
    act?: string;
    petitioners?: string[];
    respondents?: string[];
    pet_advocates?: string[];
    resp_advocates?: string[];
    u_section?: string;
    earlier_court?: string;
    inter_locutary_applications?: string;
    judgement?: string;
    listing_dates?: string;
    notices?: string;
}

const caseSchema = new Schema<CaseType>({
    hash: {type: String, required: true, unique: true},
    diary_number: {type: String, required: true},
    filed_on: String,
    slp_no: String,
    registered_on: String,
    verified_on: String,
    last_listed_on: String,
    last_hearing_judges: String,
    status: String,
    tentative_date: String,
    category: String,
    act: String,
    petitioners: Array,
    respondents: Array,
    pet_advocates: Array,
    resp_advocates: Array,
    u_section: String,
    earlier_court: String,
    inter_locutary_applications: String,
    judgement: String,
    listing_dates: String,
    notices: String
});

const Case = model<CaseType>('Case', caseSchema)

export default Case