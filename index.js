const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
const path = require('path');

const url = '';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});

function addPerson(person) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.collection('demo').insertOne(person);

    db.close();
  });
}

function getAllPeople(callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.collection('demo').find({}).toArray(function(err, docs){

  console.log('find', docs);
      callback(docs);
    });

    db.close();
  });
}

app.post('/add', function(req, res) {
  let person = req.body;
  addPerson(person);
  res.send('Added!');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  getAllPeople(function(people) {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
  });
});

app.listen(port);

console.log('Listening on localhost:', port);
