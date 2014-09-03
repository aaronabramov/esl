/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <h1 className="question-topic">{this.props.topic}</h1>
        );
    }
});
