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
        FB.getLoginStatus(function(response) {
            console.log(response);
        });
    }
};

module.exports = UserActionCreator;
