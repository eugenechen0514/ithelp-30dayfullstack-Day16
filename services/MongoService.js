class MongoService {
    /**
     * 
     * @param {MongoClient} mongoClient
     */
    constructor({ mongoClient }) {
        this.mongoClient = mongoClient;
    }

    /**
     * 
     * @return Promise<bool>
     */
    isConnected() {
        return Promise.resolve(this.mongoClient.isConnected())
    }

    /**
     * 
     * @param {*} data 
     * @return Promise
     */
    async insertEcho(data) {
        const dbName = 'myproject';
        const db = this.mongoClient.db(dbName);
        const collection = db.collection('echo');
        const result = await collection.insertOne(data);
        console.log(result);
        return result;
    }
}

module.exports = MongoService;
