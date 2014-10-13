var express = require('express'),
    router = express.Router(),
    models = require('../models');

router.get('/:filename', function(req, res) {
    var questions = require('../src/questions'),
        lessonDirectory = 'lessons/'; // relative path inside /esl/data
    res.send(questions.load(lessonDirectory + req.params.filename));
});

module.exports = router;
