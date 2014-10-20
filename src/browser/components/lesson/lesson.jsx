/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    LessonStore = require('../../stores/lesson.js'),
    Lesson;

Lesson = React.createClass({
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
            <div className="lesson">
                <h2 className="lesson-name">{lesson.name}</h2>
                <h3 className="lesson-piece">Video</h3>
                <h3 className="lesson-piece">Quiz</h3>
            </div>
        );
    }
});

module.exports = Lesson;
