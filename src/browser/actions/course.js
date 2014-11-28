var CourseConstants = require('../constants/course.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    initialize: function() {
        superagent.get('/api/course', function(err, res) {
            if (err) {
                throw (err);
            }
            Dispatcher.handleServerAction({
                actionType: CourseConstants.INITIALIZE,
                data: res.body
            });
        });
    }
};
