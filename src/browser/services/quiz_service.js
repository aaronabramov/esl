var Promise = require('es6-promise').Promise;

module.exports = {
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
