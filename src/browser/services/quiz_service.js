var Promise = require('es6-promise').Promise;

module.exports = {
    saveResults: function(numCorrect, numTotal, id) {
        var request = window.superagent;

        return new Promise(function(resolve, reject) {
            request
                .post('/quiz/save')
                .send({
                    id: id,
                    correct: numCorrect,
                    total: numTotal
                })
                .end(function(error, res) {
                    if (error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};
