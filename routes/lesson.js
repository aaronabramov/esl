var express = require('express'),
    router = express.Router(),
    data = require('../src/data.js'),
    utils = require('../src/utils.js'),
    serializer = require('../src/serializers/lesson.js');

router.get('/:id', function(req, res) {
    res.json(serializer(data.getIn(['lessons', req.params.id])));
});

module.exports = router;
