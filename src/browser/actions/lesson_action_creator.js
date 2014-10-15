var LessonService = require('../services/lesson_service.js'),
    LessonConstants = require('../constants/lesson_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function() {
        LessonService.getLesson().then(function(lesson) {
            Dispatcher.handleServerAction({
                actionType: LessonConstants.INITIALIZE,
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

