var express = require('express'),
    router = express.Router(),
    data = require('../../data.js'),
    utils = require('../../utils.js'),
    serializer = require('../serializers/lesson.js');

router.get('/:id', function(req, res) {
    res.json(serializer(data.getIn(['lessons', req.params.id])));
});

module.exports = router;
