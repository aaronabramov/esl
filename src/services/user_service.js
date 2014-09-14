var UserService = {
    getLoginStatus: function() {
        var Promise = window.Promise,
            _this = this;

        return new Promise(function(resolve, reject) {
            FB.getLoginStatus(function(response) {
                _this.sendCredentialsToServer(response).then(function onResolved(response) {
                    resolve(response);
                }, function onReject(error) {
                    reject(error);
                });
            });
        });
    },

    getUserName: function() {
        var Promise = window.Promise;

        return new Promise(function(resolve, reject) {
            FB.api('/me', function(response) {
                resolve(response);
            });
        });
    },

    login: function() {
        var Promise = window.Promise,
            _this = this;

        return new Promise(function(resolve, reject) {
            FB.login(function(response) {
                _this.sendCredentialsToServer(response).then(function onResolved(response) {
                    resolve(response);
                }, function onReject(error) {
                    reject(error);
                });
            });
        });
    },

    sendCredentialsToServer: function(data) {
        var request = window.superagent,
            Promise = window.Promise;

        return new Promise(function(resolve, reject) {
            request
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({data: data})
                .end(function(error, res) {
                    if(error) {
                        reject(error);
                    }
                    resolve(res);
                });
        });
    }
};


module.exports = UserService;
