var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:admin1234@localhost/admin';
var visto;
MongoClient.connect(url, function(err, db) {
    app.post('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");//allowing CORS
    visto = req.body.problema;
        db.collection('problemas').insert({
            problema : req.body }, function(err, result) {
            if (err) {
                console.log(err); 
                db.close();
                return;
            } 
            db.close();
        })
         res.send(result);
    });
          
    });



app.listen(3000, function () {
  console.log(visto);
});