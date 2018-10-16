var express = require('express');

/**
 * 
 * @param {MongoClient} client 
 */
function createRouter(dependencies) {
  // Get dependencies
  const {client} = dependencies;
  if(!client) {
    throw new Error('client is empty');
  }

  // Create a router
  var router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.get('/api/sayHi', function (req, res, next) {
    res.send('hi');
  });

  router.post('/api/echo', function (req, res, next) {
    const body = req.body;

    // 寫入 MongoDb
    const worker = (async function (data) {
      const db = client.db(dbName);
      const collection = db.collection('echo');
      const result = await collection.insertOne(data);
      console.log(result);
    })(body);

    // 回應
    worker.then(() => {
      res.json(body);
    })
      .catch(next); // 發生 error 的話，next() 交給之後的 middleware 處理，express 有預設的處理方法
  });

  router.get('/api/mongo', function (req, res, next) {
    res.json({
      isConnected: client.isConnected(),
    });
  });

  const mongoose = require('mongoose');
  router.get('/api/mongoose', function (req, res, next) {
    const dbName = 'myproject';

    const worker = (async function () {
      const connection = await mongoose.connect(`mongodb://localhost:27017/${dbName}`);
      return connection.readyState;
    })();


    worker
      .then(readyState => {
        res.json({
          readyState,
        });
      })
      .catch(next);
  });

  return router;
}

module.exports = {
  createRouter
};
