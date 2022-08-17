import MeiliSearch from "meilisearch";

function saveToMeilisearch(index: string, data: any) {
    const client = new MeiliSearch({
        host: process.env.MEILI_URL || '',
        apiKey: process.env.MEILI_KEY || ''
    })
    
    client.index(index).addDocuments([data]).then((value) => {
        console.log('Added: ', value.taskUid, value.status)
    })
}

export default saveToMeilisearch