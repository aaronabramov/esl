/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    LessonStore = require('../../stores/lesson.js'),
    _ = require('lodash'),
    Lesson;

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
            switch(item.type) {
                case "video":
                    return <h3 className="lesson-piece" key={item.id}>Video</h3>;
                case "quiz":
                    return <h3 className="lesson-piece" key={item.id}>Quiz</h3>;
                default:
                    return null;
            }
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
