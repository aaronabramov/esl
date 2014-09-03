module.exports = {
    getQuestions: function() {
        var request = window.superagent,
            Promise = window.Promise;

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
    }
};
