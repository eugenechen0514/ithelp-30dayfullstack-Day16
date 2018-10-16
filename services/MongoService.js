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
        
        console.log(result);
        return result;
    }
}

module.exports = MongoService;
