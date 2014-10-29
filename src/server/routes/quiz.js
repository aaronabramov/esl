var express = require('express'),
    router = express.Router(),
    models = require('../models');

router.post('/save', function(req, res, next) {
    var userId = req.user.id;
    models.quiz_results.create({
        user_id: userId,
        total_correct: req.body.correct
    }).complete(function(err, quiz_result) {
        if (err) {
            return next(err);
        }
        res.writeHead(204);
        res.end();
    });
});

router.get('/:id', function(req, res) {
    var questions = require('../../questions'),
        quizDirectory = 'quizzes/'; // relative path inside /esl/data
    res.send(questions.load(quizDirectory + req.params.id));
});

module.exports = router;
