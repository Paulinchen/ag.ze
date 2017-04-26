var express = require('express');
var horseRouter = require('./src/horse/horseRouter');

const port = 3100;


var app = express()
    .use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use('/api/horse', horseRouter)
    .listen(port, function() {
        console.log(`AG.ZE app listen on ${port}`);
    });