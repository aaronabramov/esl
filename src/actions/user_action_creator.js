var Dispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/user.js');

var UserActionCreator = {
    initialize: function() {
        var _this = this;
        var checkFbSdkInterval = setInterval(function() {
            if(window.fbSdkLoaded) {
                clearInterval(checkFbSdkInterval);
                _this.getLoginStatus();
            }
        }, 100);
    },

    getLoginStatus: function() {
        var _this = this;

        FB.getLoginStatus(function(response) {
            Dispatcher.handleServerAction({
                actionType: UserConstants.GET_LOGIN_STATUS,
                loggedIn: response.status === 'connected' ? true : false
            });

            _this.getUserName();
        });
    },

    getUserName: function() {
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            Dispatcher.handleServerAction({
                actionType: UserConstants.GET_USER_NAME,
                name: response.name
            });
        });
    }
};

module.exports = UserActionCreator;
