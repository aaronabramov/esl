/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    QuestionState = require('../../stores/question_state.js'),
    Question = require('./question.jsx'),
    Answers = require('./answers.jsx'),
    QuestionTopic = require('./question_topic.jsx'),
    QuestionExplanation = require('./question_explanation.jsx');

var Quiz = React.createClass({
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
        var question = this.props.question,
            explanation = null;

        if(question.state !== QuestionState.NOT_ANSWERED) {
            explanation = <QuestionExplanation />;
        }

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
                {explanation}
            </div>
        );
    }
});

module.exports = Quiz;
