var _ = require('lodash');

var QuestionState = {
    NOT_ANSWERED: _.uniqueId(),
    CORRECT: _.uniqueId(),
    INCORRECT: _.uniqueId()
};

module.exports = QuestionState;
