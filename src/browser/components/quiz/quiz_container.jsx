/** @jsx React.DOM */
var QuizStore = require('../../stores/quiz.js'),
    QuestionState = require('../../stores/question_state.js'),
    bean = require('bean'),
    React = require('react'),
    Quiz = require('./quiz.jsx'),
    Score = require('./score.jsx'),
    Video = require('../video/video.jsx'),
    QuizActionCreator = require('../../actions/quiz_action_creator.js');

var QuizContainer = React.createClass({
    getInitialState: function() {
        var question = QuizStore.getNextQuestion(),
            obj = {
                topic: '',
                answers: [],
                question: '',
                answer: '...',
                state: QuestionState.NOT_ANSWERED
            };

        if(question) {
            obj = {
                topic: question.topic,
                answers: question.answers,
                question: question.question,
                answer: '...',
                state: question.state
            };
        }

        return {question: obj};
    },

    componentDidMount: function() {
        bean.on(QuizStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(QuizStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        var question = QuizStore.getNextQuestion();

        if(question !== 'end') {
            this.handleQuestion(question);
        } else {
            this.handleEnd();
        }
    },

    handleQuestion: function(question) {
        var obj = {
            topic: question.topic,
            answers: question.answers,
            question: question.question,
            answer: '...',
            state: question.state
        };

        this.setState({question: obj});
    },

    handleEnd: function() {
        var totalQuestions = QuizStore.getQuestions().length,
            correctQuestions = QuizStore.getCorrectQuestions().length;

        QuizActionCreator.saveResults(correctQuestions, totalQuestions);

        this.setState({end: true});
    },

    render: function() {
        var component;

        if(!this.state.end) {
            component = <Quiz question={this.state.question} />;
        } else {
            component = <Score />;
        }

        return (
            <div className="content pure-u-1 pure-u-md-3-4">
                {component}
            </div>
        );
    }
});

module.exports = QuizContainer;
