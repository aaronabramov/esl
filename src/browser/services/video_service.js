var VideoService = {
    getVideoLink: function(name) {
        return new Promise(function(resolve, reject) {
            var request = window.superagent;

            request
                .get('/video')
                .end(function(error, res) {
                    if(error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};

module.exports = VideoService;
