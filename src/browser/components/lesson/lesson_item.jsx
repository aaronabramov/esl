/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    _ = require('lodash');

var LessonItem = React.createClass({
    render: function() {
        var id = this.props.item.id,
            name = this.props.item.type;

        return <a href='#' className="lesson-piece" key={id}>{name}</a>;
    },

    onClick: function() {

    }
});

module.exports = LessonItem;
