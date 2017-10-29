var express = require('express');
var horseRouter = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

horseRouter.route('/')
    .get(function(req, res) {
        try {
            const db = req.app.locals.db;
            db.collection('horse').find().toArray(function(err, horses) {
                if(horses) {
                    res.json(horses);
                } else {
                    res.sendStatus(404);
                }
            });
            
            
        } catch (err) {
            console.log(err);
        }
        
    })
    .post(function(req, res){
        const db = req.app.locals.db;
        console.log(req.body);
        db.collection('horse').insert(req.body.horse);
    });

horseRouter.route('/:horseid')
    .get(function (req, res) {
        var horseid = req.params['horseid'];
        try {
            const db = req.app.locals.db;
            db.collection('horse').find({_id: new ObjectId(horseid)}).toArray(function(err, horse) {
                if(horse) {
                    res.json(horse);
                } else {
                    res.sendStatus(404);
                }
            });
            
        } catch (err) {
            console.log(err);
        }

});

module.exports = horseRouter;
