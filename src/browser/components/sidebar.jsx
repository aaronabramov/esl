/** @jsx React.DOM */

var CourseStore = require('../stores/course.js'),
    bean = require('bean'),
    React = require('react'),
    Lesson = require('./lesson/lesson.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            course: CourseStore.getData()
        };
    },
    componentDidMount: function() {
        bean.on(CourseStore, 'changed', this.handleChange);
    },
    componentWillUnmount: function() {
        bean.off(CourseStore, 'changed', this.handleChange);
    },
    handleChange: function() {
        this.setState({
            course: CourseStore.getData()
        });
    },
    render: function() {
        var lessons = CourseStore.getData().map(function(lesson, index) {
            return <Lesson lessonIndex={index} />
        });

        return (
            <div className="sidebar pure-u-1 pure-u-md-1-4">
                <h1 className="brand-title">
                    <a href="/">ESL</a>
                </h1>
                {lessons}
            </div>
        );
    }
});
