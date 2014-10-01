var express = require('express'),
    router = express.Router(),
    models = require('../models');

router.post('/save', function(req, res) {
    models.quiz_results.create({total_correct: req.body.correct}).complete(function(err, quiz_result) {
        console.log(quiz_result);
        res.json({'success': 1});
    });
});

router.get('/:filename', function(req, res) {
    var questions = require('../src/questions');
    res.send(questions.load(req.params.filename));
});

module.exports = router;
