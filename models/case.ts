import { model, Schema } from "mongoose";

interface CaseType {
    diary_no: string;
    filing_date?: string;
    case_no?: string;
    registration_date?: string;
    last_listing_date?: string;
    last_listing_judges?: string;
    status?: string;
    tentative_next_date?: string;
    category?: string;
    act?: string;
    petitioners?: string[];
    respondents?: string[];
    pet_advocates?: string[];
    resp_advocates?: string[];
    section?: string;
}

const caseSchema = new Schema<CaseType>({
    diary_no: {type: String, required: true},
    filing_date: String,
    case_no: String,
    registration_date: String,
    last_listing_date: String,
    last_listing_judges: String,
    status: String,
    tentative_next_date: String,
    category: String,
    act: String,
    petitioners: Array,
    respondents: Array,
    pet_advocates: Array,
    resp_advocates: Array,
    section: String,
});

const Case = model<CaseType>('Case', caseSchema)

export default Case