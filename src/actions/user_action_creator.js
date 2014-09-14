var Dispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/user.js'),
    UserService = require('../services/user_service.js');

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

        UserService.getLoginStatus().then(function onResolve(response) {
            Dispatcher.handleServerAction({
                actionType: UserConstants.GET_LOGIN_STATUS,
                loggedIn: response.status === 'connected' ? true : false
            });

            if(response.status === 'connected') {
                _this.getUserName();
            }
        }, function onReject(error) {

        });
    },

    getUserName: function() {
        UserService.getUserName().then(function onResolve(response) {
            Dispatcher.handleServerAction({
                actionType: UserConstants.GET_USER_NAME,
                name: response.name
            });
        }, function onReject() {

        });
    },

    login: function() {
        var _this = this;

        UserService.login().then(function onResolve(response) {
            Dispatcher.handleServerAction({
                actionType: UserConstants.LOGIN,
                loggedIn: response.status === 'connected' ? true : false
            });

            if(response.status === 'connected') {
                _this.getUserName();
            }
        }, function onReject() {

        });
    }
};

module.exports = UserActionCreator;
