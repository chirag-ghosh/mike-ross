import MeiliSearch from "meilisearch";

function saveToMeilisearch(index: string, data: any[]) {
    const client = new MeiliSearch({
        host: process.env.MEILI_URL || '',
        apiKey: process.env.MEILI_KEY || ''
    })
    data.map((datom) => {
        client.index(index).addDocuments(datom).then((value) => {
            console.log('Added: ', value.taskUid, value.status)
        })
    })
}

export {saveToMeilisearch}