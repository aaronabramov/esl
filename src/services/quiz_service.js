var Promise = require('es6-promise').Promise;

module.exports = {
    getQuestions: function() {
        var request = window.superagent;

        return new Promise(function(resolve, reject) {
            request
                .get('/questions/topic1.yml')
                .end(function(error, res) {
                    if(error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    },

    saveResults: function(numCorrect, numTotal) {
        var request = window.superagent;

        return new Promise(function(resolve, reject) {
            request
                .post('/quiz/save')
                .send({
                    correct: numCorrect,
                    total: numTotal
                })
                .end(function(error, res) {
                    if(error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};
