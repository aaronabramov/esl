var _ = require('lodash');

module.exports = {
    INITIALIZE: _.uniqueId('quiz-initialize'),
    ERROR: _.uniqueId('quiz-error'),
    SUBMIT_ANSWER: _.uniqueId('quiz-submit-answer'),
    NEXT_QUESTION: _.uniqueId('quiz-next-question')
};
