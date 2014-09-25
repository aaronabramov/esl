var Dispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/user.js'),
    UserService = require('../services/user_service.js');

var UserActionCreator = {
    initialize: function() {

    },

    login: function() {
        // this will be different because it will go to our server now.

        // var _this = this;

        // UserService.login().then(function onResolve(response) {
        //     Dispatcher.handleServerAction({
        //         actionType: UserConstants.LOGIN,
        //         loggedIn: response.success ? true : false
        //     });

        //     if(response.success) {
        //         _this.getUserName();
        //     }
        // }, function onReject() {

        // });
    }
};

module.exports = UserActionCreator;
