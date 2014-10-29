var MediaService = require('../services/media_service.js'),
    VideoConstants = require('../constants/video_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function(data) {
        var videoName = data[0].id;

        this.getVideoLink(videoName);
    },

    getVideoLink: function(name) {
        MediaService.getFileLink(name).then(function(data) {
            Dispatcher.handleServerAction({
                actionType: VideoConstants.GET_VIDEO_LINK,
                link: data.link
            });
        }, function(error) {
            console.error('error: unable to get video link');
        });
    }
};
