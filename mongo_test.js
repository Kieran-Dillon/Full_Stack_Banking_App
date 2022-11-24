const MongoClient = require('mongodb').MongoClient;

//const url = 'mongodb://badbankmongo:C00k13W00k13W00!@docdb-2022-11-23-00-28-04.cluster-comasatgdrqn.us-west-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=BadBankECS.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false';
const url = 'mongodb://badbankmongo:C00k13W00k13W00!@docdb-2022-11-23-00-28-04.comasatgdrqn.us-west-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&retryWrites=false'
//const url = 'mongodb://localhost:27017';
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  console.log("Connected successfully to server");

    //database Name
    const dbName = 'badbank';
    const db = client.db(dbName);    
  
    // new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // insert into customer table
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
      console.log('Document insert');
    });

    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('Collection:',docs);

            //clean up
            client.close();            
    });    

});
