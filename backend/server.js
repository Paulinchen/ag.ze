var express = require('express');
var horseRouter = require('./src/horse/horseRouter');

const port = 3100;


var app = express()
    .use('/api/horse', horseRouter)
    .listen(port, function() {
        console.log(`AG.ZE app listen on ${port}`);
    });