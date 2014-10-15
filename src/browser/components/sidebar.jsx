/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    LessonStore = require('../stores/lesson.js');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            lesson: LessonStore.getLesson() || {}
        };
    },

    componentDidMount: function() {
        bean.on(LessonStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(LessonStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        this.setState({
            lesson: LessonStore.getLesson()
        });
    },

    render: function() {
        var lesson = this.state.lesson;

        if(!lesson) {
            return null;
        }

        return (
            <div className="sidebar pure-u-1 pure-u-md-1-4">
                <div className="header">
                    <h1 className="brand-title">ESL</h1>
                    <h2 className="lesson">{lesson.name}</h2>
                    <h3 className="lesson-piece">Video</h3>
                    <h3 className="lesson-piece">Quiz</h3>
                </div>
            </div>
        );
    }
});
