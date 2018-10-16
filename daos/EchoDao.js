class EchoDao {
    /**
     * 
     * @param {MongoClient} mongoClient
     */
    constructor({ mongoClient }) {
        this.mongoClient = mongoClient;
    }

    insert(data) {
    }
}

module.exports = EchoDao;
