var router = require('express').Router(),
    models = require('../models');

router.post('/', function(req, res, next) {
    models.views.create({
        content_id: req.body.content_id,
        user_id: 1
    }).complete(function(err, view) {
        if (err) {
            return next(err);
        }
        res.writeHead(204);
        res.end();
    });
});
