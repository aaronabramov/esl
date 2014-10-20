var _ = require('lodash'),
    LessonService = require('../services/lesson_service.js'),
    LessonConstants = require('../constants/lesson_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function() {
        LessonService.getLesson().then(function(lesson) {
            var lessonContent = _.groupBy(lesson.items, function(item) {
                return item.type;
            });

            Dispatcher.handleServerAction({
                actionType: LessonConstants.INITIALIZE,
                quizzes: lessonContent.quiz,
                videos: lessonContent.video,
                audios: lessonContent.audio,
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

