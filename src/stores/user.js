var UserConstants = require('../constants/user.js'),
    Dispatcher = require('../dispatcher/dispatcher.js'),
    bean = require('bean');

var User = {
    loggedIn: false,
    name: '',

    getLoginStatus: function() {
        return this.loggedIn;
    },

    getUserName: function() {
        return this.name;
    },

    register: function() {
        var _this = this;

        // Register to handle all updates
        Dispatcher.register(function(payload) {
            var action = payload.action;

            switch(action.actionType) {
                case UserConstants.GET_LOGIN_STATUS:
                case UserConstants.LOGIN:
                    _this.loggedIn = action.loggedIn;
                    break;

                case UserConstants.GET_USER_NAME:
                    _this.name = action.name;
                    break;

                default:
                  return true;
            }

            // This often goes in each case that should trigger a UI change. This store
            // needs to trigger a UI change after every view action, so we can make the
            // code less repetitive by putting it here.  We need the default case,
            // however, to make sure this only gets called after one of the cases above.
            bean.fire(_this, 'changed');

            return true; // No errors.  Needed by promise in Dispatcher.
        });
    }
};


User.register();
module.exports = User;
