/** @jsx React.DOM */

var React = require('react'),
    Answer = require('./answer.jsx');

module.exports = React.createClass({
    render: function() {
        var answers = this.props.answers;
        return (
            <div className="question-answers">
                {
                    answers.map(function(answer) {
                        return <Answer setAnswer={this.props.setAnswer}
                                       answer={answer}
                                />;
                    }, this)
                }
            </div>
        );
    }
});
