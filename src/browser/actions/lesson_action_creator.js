var _ = require('lodash'),
    LessonService = require('../services/lesson_service.js'),
    LessonConstants = require('../constants/lesson_constants.js'),
    VideoActionCreator = require('./video_action_creator.js'),
    AudioActionCreator = require('./audio_action_creator.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function() {
        LessonService.getLesson().then(function(lesson) {
            var lessonContent = _.groupBy(lesson.items, function(item) {
                return item.type;
            });

            if (lessonContent.video) {
                VideoActionCreator.initialize(lessonContent.video);
            }

            if (lessonContent.audio) {
                AudioActionCreator.initialize(lessonContent.audio);
            }

            Dispatcher.handleServerAction({
                actionType: LessonConstants.INITIALIZE,
                quizzes: lessonContent.quiz,
                lesson: lesson,
                lessonContent: lessonContent
            });
        }, function(error) {
            console.error('get lesson: failed');
            Dispatcher.handleServerAction({
                actionType: LessonConstants.ERROR,
                error: error
            });
        });
    },

    // changeActiveLesson: function(id) {
    //     Dispatcher.handleViewAction({
    //         actionType: LessonConstants.SET_ACTIVE_CONTENT,
    //         id: id
    //     });
    //     // after action has been handled
    //     // track the view and don't wait for it to return
    //     superagent.post('/views').send({
    //         content_id: id
    //     }).end();
    // },
    changeActiveItem: function(item) {
        Dispatcher.handleViewAction({
            actionType: LessonConstants.SET_ACTIVE_CONTENT,
            item: item
        });
        // after action has been handled
        // track the view and don't wait for it to return
        superagent.post('/views').send({
            content_id: item.id
        }).end();
    }
};
