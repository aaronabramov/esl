var api = require('express').Router(),
    data = require('../utils/data.js'),
    serializer = require('../serializers/lesson.js'),
    LESSON_NUMBER_REGEX = /(\d+)/,
    cachedLessons;

// Return the whole course with nested lessons
api.get('/course', function(req, res) {
    if (!cachedLessons) {
        cachedLessons = data.get('lessons').map(serializer).toArray();
        cachedLessons = JSON.parse(JSON.stringify(cachedLessons)); // otherwise immutable data will mutate :)

        // Sort lessons by their names by parsing the name and getting the number out of it
        // 'Lesson 10' > 'Lesson 1'
        cachedLessons = cachedLessons.sort(function(a, b) {
            a = parseInt(LESSON_NUMBER_REGEX.exec(a.name)) || 0;
            b = parseInt(LESSON_NUMBER_REGEX.exec(b.name)) || 0;

            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
    res.json(cachedLessons);
});

module.exports = api;
