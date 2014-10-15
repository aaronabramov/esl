var Promise = require('es6-promise').Promise;

module.exports = {
    getLesson: function() {
        var request = window.superagent;

        return new Promise(function(resolve, reject) {
            request
                .get('/lessons/1')
                .end(function(error, res) {
                    if(error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};
