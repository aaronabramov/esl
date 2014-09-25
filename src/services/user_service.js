var Promise = require('es6-promise').Promise;

var UserService = {
    getLoginStatus: function() {
        var _this = this;

        return new Promise(function(resolve, reject) {
                // FB.getLoginStatus(function(response) {
                //     _this.sendCredentialsToServer(response).then(function onResolved(response) {
                //         resolve(response.body);
                //     }, function onReject(error) {
                //         reject(error);
                //     });
                // });
        });
    },

    getUserName: function() {
        var _this = this;

        return new Promise(function(resolve, reject) {
            // FB.api('/me', function(response) {
            //     resolve(response);
            // });
        });
    },

    login: function() {
        var _this = this;

        return new Promise(function(resolve, reject) {
            // FB.login(function(response) {
            //     _this.sendCredentialsToServer(response).then(function onResolved(response) {
            //         resolve(response.body);
            //     }, function onReject(error) {
            //         reject(error);
            //     });
            // });
        });
    },

    sendCredentialsToServer: function(data) {
        var request = window.superagent;

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
