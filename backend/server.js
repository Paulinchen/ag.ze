var express = require('express');
var bodyParser = require('body-parser');
var horseRouter = require('./src/horse/horseRouter');
var mongoose = require('mongoose');

const port = 3100;


var app = express()
    .use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    })
    .use(bodyParser.json())
    .use('/api/horse', horseRouter);

mongoose.connect('mongodb://127.0.0.1:27017/agze');
var db = mongoose.connection;
db.on('error', function (err) { throw err });
db.once('open', function callback() {
    app.locals.db = db;
    console.log('Successfully connected to mongodb');
    app.listen(port, function() {
        console.log(`AG.ZE app listen on ${port}`);
    });
});