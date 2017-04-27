var express = require('express');
var horseRouter = express.Router();

horseRouter.route('/')
    .get(function(req, res) {
        try {
            const db = req.app.locals.db;
            const horse = db.collection('horse').find().toArray(function(err, horses) {
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
        if (horses.find(horse => horse.id == horseid)) {
            res.json(horses.find(horse => horse.id == horseid));
        }
        else {
            res.send(404, { status: 'Not found' });
        }
});

module.exports = horseRouter;
