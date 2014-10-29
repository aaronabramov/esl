module.exports = {
    getFileLink: function(name) {
        return new Promise(function(resolve, reject) {
            superagent.get('/s3/' + name)
                .end(function(error, res) {
                    if (error) {
                        reject(error);
                    }
                    resolve(res.body);
                });
        });
    }
};
