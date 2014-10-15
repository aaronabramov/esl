var express = require('express'),
    router = express.Router(),
    models = require('../../../models');

router.post('/save', function(req, res) {
    models.quiz_results.create({total_correct: req.body.correct}).complete(function(err, quiz_result) {
        console.log(quiz_result);
        res.json({'success': 1});
    });
});

router.get('/:id', function(req, res) {
    var questions = require('../../questions'),
        quizDirectory = 'quizzes/'; // relative path inside /esl/data
    res.send(questions.load(quizDirectory + req.params.id));
});

module.exports = router;
