var UserService = {
    getLoginStatus: function() {
        var Promise = window.Promise;

        return new Promise(function(resolve, reject) {
            FB.getLoginStatus(function(response) {
                resolve(response);
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
        var Promise = window.Promise;

        return new Promise(function(resolve, reject) {
            FB.login(function(response) {
                resolve(response);
            });
        });
    }
};


module.exports = UserService;
