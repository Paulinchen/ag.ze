var express = require('express');
var horseRouter = express.Router();

const horses = [
            {id: 0, name: 'Paulchen', stable: 'Giggenhausen', race: 'Haflinger', dateOfBirth: 2006},
            {id: 1, name: 'Nino', stable: 'Giggenhausen', race: 'Haflinger', dateOfBirth: 2004},
            {id: 2, name: 'Ciro', stable: 'Holzerhof', race: 'Freiberger', dateOfBirth: 2008}
        ];

horseRouter.route('/')
    .get(function(req, res) {
        res.json(horses)
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
