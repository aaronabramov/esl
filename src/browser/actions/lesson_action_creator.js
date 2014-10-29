var _ = require('lodash'),
    LessonService = require('../services/lesson_service.js'),
    LessonConstants = require('../constants/lesson_constants.js'),
    VideoActionCreator = require('./video_action_creator.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function() {
        LessonService.getLesson().then(function(lesson) {
            var lessonContent = _.groupBy(lesson.items, function(item) {
                return item.type;
            });

            VideoActionCreator.initialize(lessonContent.video);

            Dispatcher.handleServerAction({
                actionType: LessonConstants.INITIALIZE,
                quizzes: lessonContent.quiz,
                lesson: lesson
            });
        }, function(error) {
            console.error('get lesson: failed');
            Dispatcher.handleServerAction({
                actionType: LessonConstants.ERROR,
                error: error
            });
        });
    }
};

