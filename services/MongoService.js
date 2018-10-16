class MongoService {
    /**
     * 
     * @param {MongoClient} mongoClient
     */
    constructor({mongoClient}) {
        this.mongoClient = mongoClient;
    }

    /**
     * 
     * @return Promise<bool>
     */
    isConnected() {
        return Promise.resolve(this.mongoClient.isConnected())
    }
}

module.exports = MongoService;
