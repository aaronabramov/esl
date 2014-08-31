var QuestionsService = {
    getQuestions: function(successCb, errorCb) {
        var request = window.superagent;

        request
            .get('/questions/topic1.yml')
            .end(function(error, res) {
                if(error) {
                    errorCb(error);
                }

                if(res) {
                    successCb(res.body);
                }
            });
    }
};
