var bean = require('bean'),
    CourseConstants = require('../constants/course.js'),
    LessonConstants = require('../constants/lesson_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js'),
    _ = require('lodash');

module.exports = {
    _data: [],

    register: function() {
        var _this = this;

        Dispatcher.register(function(payload) {
            switch (payload.action.actionType) {
                case CourseConstants.INITIALIZE:
                    _this._data = payload.action.data;
                    break;
                case LessonConstants.SET_ACTIVE_CONTENT:
                    console.log('store', payload.action);
                    _this.activeContent = payload.action.item.uniqId;
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
    },
    /**
     * @param {Number} uniqId of the item
     * @return {Object,null} item object or null if not found
     */
    getActiveItem: function() {
        var found,
            uniqId = this.activeContent;

        if (!uniqId || !this._data) {
            return null;
        }

        for (var i = 0, l = this._data.length; i < l; i++) {
            found = _.find(this._data[i].items, function(item) {
                return item.uniqId === uniqId;
            });

            if (found) {
                return found;
            }
        }
        return null;
    }
};

module.exports.register();
