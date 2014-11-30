var VideoConstants = require('../constants/video_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js'),
    bean = require('bean');

var Video = {
    link: '',
    getLink: function() {
        return this.link;
    },

    register: function() {
        var _this = this;

        Dispatcher.register(function(payload) {
            var action = payload.action;

            switch (action.actionType) {
                case VideoConstants.GET_VIDEO_LINK:
                    _this.link = action.link;
                    break;

                default:
                    return true;
            }
            bean.fire(_this, 'changed');
            return true; // No errors.  Needed by promise in Dispatcher.
        });
    }
};


Video.register();
module.exports = Video;
