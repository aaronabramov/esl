var QuestionsService = require('../services/questions_service.jsx'),
    QuestionConstants = require('../constants/questions_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports  = {
    initialize: function() {
        QuestionsService.getQuestions().then(function(data) {
            Dispatcher.handleServerAction({
                actionType: QuestionsConstants.INITIALIZE,
                questions: data.questions
            });
        }, function(error) {
            Dispatcher.handleServerAction({
                actionType: QuestionsConstants.ERROR,
                error: error
            });
        });
    },

    submitAnswer: function(submittedAnswer) {
        Dispatcher.handleViewAction({
            actionType: QuestionsConstants.SUBMIT_ANSWER,
            submittedAnswer: submittedAnswer
        });
    }

};
