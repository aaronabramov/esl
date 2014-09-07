/** @jsx React.DOM */

var React = require('react'),
    Question = require('./question.jsx'),
    Answers = require('./answers.jsx'),
    QuestionTopic = require('./question_topic.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            answer: '...'
        };
    },

    setAnswer: function(answer) {
        if(answer === null) {
            answer = '...';
        }

        this.setState({
            answer: answer
        });
    },

    render: function() {
        var question = this.props.question;

        return (
            <div className="question-box">
                <QuestionTopic topic={question.topic} />

                <div className="question-body">
                    <Question question={question.question}
                              answer={this.state.answer}
                    />
                    <Answers setAnswer={this.setAnswer}
                             answers={question.answers}
                    />
                </div>
            </div>
        );
    }
});
