/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    _ = require('lodash'),
    ApplicationActionCreator = require('../../actions/application_action_creator.js');

var LessonItem = React.createClass({
    render: function() {
        var id = this.props.item.id,
            name = this.getName();

        return <a href='#'
                  className="lesson-piece"
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
        ApplicationActionCreator.changePage(this.props.item);
        return false; // stop propagation
    }
});

module.exports = LessonItem;
