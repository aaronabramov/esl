var bean = require('bean'),
    CourseConstants = require('../constants/course.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    _data: [],

    register: function() {
        var _this = this;

        Dispatcher.register(function(payload) {
            switch (payload.action.actionType) {
                case CourseConstants.INITIALIZE:
                    _this._data = payload.action.data;
                    break;
                default:
                    return true;
            }
            bean.fire(_this, 'changed');
            return true;
        });
    },
    getData: function() {
        return this._data;
    }
};

module.exports.register();
