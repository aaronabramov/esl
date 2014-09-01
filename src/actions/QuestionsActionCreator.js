var QuestionsActionCreator = {
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
