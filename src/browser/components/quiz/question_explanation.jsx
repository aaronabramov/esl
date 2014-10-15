/** @jsx React.DOM */

var React = require('react'),
    QuizActionCreator = require('../../actions/quiz_action_creator.js');

module.exports = React.createClass({
    handleClick: function() {
        // clear the focus immediately after receiving a click.
        // this.refs.answerButton.getDOMNode().blur();

        QuizActionCreator.nextQuestion();
    },

    render: function() {
        return (
            <div className="question-footer">
                <div className="question-next">
                    <div className="question-explanation">You need to use the interrogative form.</div>

                    <button onClick={this.handleClick} className="question-next-button">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="next-text">Next</span>
                    </button>
                </div>
            </div>
        );
    }
});

