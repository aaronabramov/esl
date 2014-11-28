var api = require('express').Router(),
    data = require('../utils/data.js'),
    serializer = require('../serializers/lesson.js');

// Return the whole course with nested lessons
api.get('/course', function(req, res) {
    var lessons = data.get('lessons').map(function(l) {
        return serializer(l);
    });
    res.json(lessons.toArray());
});

module.exports = api;
