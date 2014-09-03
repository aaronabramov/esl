/** @jsx React.DOM */

var Score = React.createClass({
    getInitialState: function() {
        return {
            questions: QuestionsStore.getQuestions()
        };
    },

    calculateScore: function() {
        var score = 0,
            questions = this.state.questions;

        for(var i = 0; i < questions.length; i++) {
            if(questions[i].state === QuestionState.CORRECT) {
                score++;
            }
        }

        return score;
    },

    render: function() {
        var score = this.calculateScore();
        return (
            <div>{score}</div>
        );
    }
});
