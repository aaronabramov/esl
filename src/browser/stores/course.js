var bean = require('bean'),
    CourseConstants = require('../constants/course.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    register: function() {
        var _this = this;

        Dispatcher.register(function(payload) {
            switch (payload.action.actionType) {
                case CourseConstants.INITIALIZE:
                    _this.data = payload.action.data;
                    break;
                default:
                    return true;
            }
            bean.fire(_this, 'changed');
            return true;
        });
    }
};

module.exports.register();
