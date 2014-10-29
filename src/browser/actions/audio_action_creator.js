var MediaService = require('../services/media_service.js'),
    AudioConstants = require('../constants/audio_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function(data) {
        var audioName = data[0].id;

        this.getAudioLink(audioName);
    },

    getAudioLink: function(name) {
        MediaService.getFileLink(name).then(function(data) {
            Dispatcher.handleServerAction({
                actionType: AudioConstants.GET_AUDIO_LINK,
                link: data.link
            });
        }, function(error) {
            console.error('error: unable to get audio link');
        });
    }
};
