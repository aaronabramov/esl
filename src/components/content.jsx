/** @jsx React.DOM */
var QuizStore = require('../stores/quiz.js'),
    bean = require('bean'),
    React = require('react'),
    Quiz = require('./quiz/quiz.jsx'),
    Score = require('./quiz/score.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        var question = QuizStore.getNextQuestion(),
            obj = {
                topic: '',
                answers: [],
                question: '',
                answer: '...'
            };

        if(question) {
            obj = {
                topic: question.topic,
                answers: question.answers,
                question: question.question,
                answer: '...'
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
        var question = QuizStore.getNextQuestion(),
            obj;

        if(question !== 'end') {
            obj = {
                topic: question.topic,
                answers: question.answers,
                question: question.question,
                answer: '...'
            };

            this.setState({question: obj});
        } else {
            this.setState({end: true});
        }

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
