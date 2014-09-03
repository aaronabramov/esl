/** @jsx React.DOM */

var React = require('react'),
    QuestionsStore = require('../../stores/questions_store.js'),
    QuestionState = require('../../stores/question_state.js');

module.exports = React.createClass({
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
            <div className="score-container">
                <div className="score-intro">You scored</div>
                <div className="score">{score}</div>
                <div className="score-outro">out of {this.state.questions.length}</div>
            </div>
        );
    }
});
