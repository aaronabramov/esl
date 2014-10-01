/** @jsx React.DOM */

var React = require('react'),
    QuizStore = require('../../stores/quiz.js'),
    QuestionState = require('../../stores/question_state.js');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            questions: QuizStore.getQuestions(),
            correctQuestions: QuizStore.getCorrectQuestions()
        };
    },

    render: function() {
        return (
            <div className="score-container">
                <div className="score-intro">You scored</div>
                <div className="score">{this.state.correctQuestions.length}</div>
                <div className="score-outro">out of {this.state.questions.length}</div>
            </div>
        );
    }
});
