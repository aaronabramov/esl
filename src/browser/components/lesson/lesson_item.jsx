/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    _ = require('lodash'),
    ApplicationActionCreator = require('../../actions/application_action_creator.js');

var LessonItem = React.createClass({
    render: function() {
        var id = this.props.item.id,
            name = this.props.item.type;

        return <a href='#'
                  className="lesson-piece"
                  key={id}
                  onClick={this.handleClick}>
                    {name}
                </a>;
    },

    handleClick: function() {
        ApplicationActionCreator.changePage(this.props.item);
        return false; // stop propagation
    }
});

module.exports = LessonItem;
