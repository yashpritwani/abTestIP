const mongoose = require('mongoose');


async function dbConnection() {
  const connUrl = "mongodb+srv://ypritwani:Yash2904%40@knowledgehub-database.zu4vn.mongodb.net/test5666";

  const connParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
  }

  mongoose.promise = global.Promise;
  mongoose.connect(connUrl,connParams);
  mongoose.connection.once('open', async() => {
    console.log("db conn success");
  })
  mongoose.connection.on('error', async(err) => {
    console.log("db conn error" + err);
    process.exit()
  })
}

module.exports = dbConnection;