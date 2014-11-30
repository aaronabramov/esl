var api = require('express').Router(),
    data = require('../utils/data.js'),
    serializer = require('../serializers/lesson.js'),
    cachedLessons;

// Return the whole course with nested lessons
api.get('/course', function(req, res) {
    if (!cachedLessons) {
        console.log('dont go here');
        cachedLessons = data.get('lessons').map(function(l) {
            return serializer(l);
        }).toArray();
        cachedLessons = JSON.parse(JSON.stringify(cachedLessons)); // otherwise immutable data will mutate :)
    }
    res.json(cachedLessons);
});

module.exports = api;
