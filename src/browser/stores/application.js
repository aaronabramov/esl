var ApplicationConstants = require('../constants/application_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js'),
    bean = require('bean'),
    _ = require('lodash');

var ApplicationStore = {
    activePage: {},

    getActivePage: function() {
        return this.activePage;
    },

    register: function() {
        var _this = this;

        Dispatcher.register(function(payload) {
            var action = payload.action;

            switch(action.actionType) {
                case ApplicationConstants.CHANGE_PAGE:
                    _this.activePage = action.activePage;
                    break;

                default:
                  return true;
            }

            bean.fire(_this, 'changed');
            return true; // No errors.  Needed by promise in Dispatcher.
        });
    }
};

ApplicationStore.register();

module.exports = ApplicationStore;
