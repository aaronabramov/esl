/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    LessonStore = require('../../stores/lesson.js'),
    _ = require('lodash'),
    Lesson,
    LessonItem = require('./lesson_item.jsx');

Lesson = React.createClass({
    getInitialState: function() {
        return {
            lesson: LessonStore.getLesson() || null
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
        var lesson = this.state.lesson,
            lessonItemComponents;

        if(_.isEmpty(lesson)) {
            return null;
        }

        lessonItemComponents = lesson.items.map(function(item) {
            return <LessonItem item={item} />
        });

        return (
            <div className="lesson">
                <h2 className="lesson-name">{lesson.name}</h2>
                {lessonItemComponents}
            </div>
        );
    }
});

module.exports = Lesson;
