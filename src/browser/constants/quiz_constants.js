var _ = require('lodash');

module.exports = {
    INITIALIZE: _.uniqueId(),
    ERROR: _.uniqueId(),
    SUBMIT_ANSWER: _.uniqueId(),
    NEXT_QUESTION: _.uniqueId()
};
