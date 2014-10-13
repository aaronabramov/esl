var LessonConstants = require('../constants/lesson_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js'),
    bean = require('bean'),
    _ = require('lodash');

var LessonStore = {
    lesson: {},

    register: function() {
        var _this = this;

        Dispatcher.register(function(payload) {
            var action = payload.action;

            switch(action.actionType) {
                case LessonConstants.INITIALIZE:
                    _this.lesson = action.lesson;
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

LessonStore.register();

module.exports = LessonStore;
