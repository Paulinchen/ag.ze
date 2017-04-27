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

        // if (horses.find(horse => horse.id == horseid)) {
        //     res.json(horses.find(horse => horse.id == horseid));
        // }
        // else {
        //     res.send(404, { status: 'Not found' });
        // }
});

module.exports = horseRouter;
