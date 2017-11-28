var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://admin:admin1234@localhost/test?authSource=admin';

MongoClient.connect(dburl, function(err, db) {
     app.post("/", (req, res) => { 
      res.header("Access-Control-Allow-Origin", "*");
      if(err) { throw err;  }
      var collection = db.collection('first');
      var item = { firstName: req.body.firstName };
      collection.insert(item, function(err, result) {
      if(err) { throw err; }
    //    res.sendFile(__dirname + "/index.html");
   });
  console.log(req.body.firstName);// esto lo hago y veo body{} en la consola.        
});
   
});


app.listen(port, () => {
    console.log("Server listening on port " + port);
});
