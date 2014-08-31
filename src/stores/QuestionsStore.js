
window.questions = [{
    topic: 'Word Order in Questions',
    question: '$ from England?',
    answers: [
        'You are',
        'You',
        'Are you',
        'Are'
    ],
    correct: 3
}, {
    topic: 'Word Order in Questions',
    question: '$ love you?',
    answers: [
        'She',
        'Does she',
        'She does',
        'Does'
    ],
    correct: 2
}, {
    topic: 'Word Order in Questions',
    question: '$ on holiday?',
    answers: [
        'Are they',
        'They are',
        'Are',
        'They'
    ],
    correct: 1
}, {
    topic: "Being Verbs",
    question: "John and Amy $ American",
    answers: [
        'be',
        'are',
        'am',
        'is'
    ],
    correct: 2
}];

var QuestionsStore = {
    questions: [],
    index: 0,
    getNextQuestion: function() {
        var question = this.questions[this.index];
        if(question) {
            this.index++;
        }
        return question;
    },
    register: function() {
        var _this = this;

        // Register to handle all updates
        Dispatcher.register(function(payload) {
            var action = payload.action;

            switch(action.actionType) {
                case QuestionsConstants.INITIALIZE:
                    _this.questions = action.questions;
                    break;

                default:
                  return true;
            }

            // This often goes in each case that should trigger a UI change. This store
            // needs to trigger a UI change after every view action, so we can make the
            // code less repetitive by putting it here.  We need the default case,
            // however, to make sure this only gets called after one of the cases above.
            bean.fire(_this, 'changed');

            return true; // No errors.  Needed by promise in Dispatcher.
        });
    }
};

QuestionsStore.register();
