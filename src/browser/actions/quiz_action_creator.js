var QuizService = require('../services/quiz_service.js'),
    QuizConstants = require('../constants/quiz_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    submitAnswer: function(submittedAnswer) {
        Dispatcher.handleViewAction({
            actionType: QuizConstants.SUBMIT_ANSWER,
            submittedAnswer: submittedAnswer
        });
    },

    nextQuestion: function() {
        Dispatcher.handleViewAction({
            actionType: QuizConstants.NEXT_QUESTION
        });
    },

    saveResults: function(numCorrect, numTotal, id) {
        QuizService.saveResults(numCorrect, numTotal, id).then(function(data) {
            console.log('results saved!');
            console.log(data);
        }, function(error) {
            console.log('error: results not saved');
        });
    }

};
