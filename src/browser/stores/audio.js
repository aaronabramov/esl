var AudioConstants = require('../constants/audio_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js'),
    bean = require('bean');

var Audio = {
    link: '',
    getLink: function() {
        return this.link;
    },

    register: function() {
        var _this = this;

        Dispatcher.register(function(payload) {
            var action = payload.action;

            switch(action.actionType) {
                case AudioConstants.GET_AUDIO_LINK:
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


Audio.register();
module.exports = Audio;
