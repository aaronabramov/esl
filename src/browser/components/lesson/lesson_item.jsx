/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    _ = require('lodash'),
    LessonActionCreator = require('../../actions/lesson_action_creator.js');

var LessonItem = React.createClass({
    render: function() {
        var id = this.props.item.id,
            name = this.getName(),
            classes = 'lesson-piece';

        if(this.props.active) {
            classes += ' active';
        }

        return <a href='#'
                  className={classes}
                  key={id}
                  onClick={this.handleClick}>
                    {name}
                </a>;
    },

    getName: function() {
        var type = this.props.item.type;

        switch(type) {
            case 'quiz':
                return 'Quiz';
            case 'video':
                return 'Video';
            case 'audio':
                return 'Audio';
            default:
                return 'Not found';
        }
    },

    handleClick: function() {
        LessonActionCreator.changeActiveLesson(this.props.item.id);
        return false; // stop propagation
    }
});

module.exports = LessonItem;
