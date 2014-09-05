var QuestionsService = require('../services/questions_service.js'),
    QuizConstants = require('../constants/quiz_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function() {
        QuestionsService.getQuestions().then(function(data) {
            Dispatcher.handleServerAction({
                actionType: QuizConstants.INITIALIZE,
                questions: data.questions
            });
        }, function(error) {
            Dispatcher.handleServerAction({
                actionType: QuizConstants.ERROR,
                error: error
            });
        });
    },

    submitAnswer: function(submittedAnswer) {
        Dispatcher.handleViewAction({
            actionType: QuizConstants.SUBMIT_ANSWER,
            submittedAnswer: submittedAnswer
        });
    }

};
