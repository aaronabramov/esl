var VideoService = require('../services/video_service.js'),
    VideoConstants = require('../constants/video_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function() {
        this.getVideoLink('beginner_1_4.m4a');
    },

    getVideoLink: function(name) {
        VideoService.getVideoLink(name).then(function(data) {
            console.log(data);

            Dispatcher.handleServerAction({
                actionType: VideoConstants.GET_VIDEO_LINK,
                link: data.link
            });
    }, function(error) {
            console.error('error: unable to get video link');
        });

    }
};
