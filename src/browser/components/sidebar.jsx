/** @jsx React.DOM */

var React = require('react'),
    Lesson = require('./lesson/lesson.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="sidebar pure-u-1 pure-u-md-1-4">
                <h1 className="brand-title">
                    <a href="/">ESL</a>
                </h1>
                <Lesson />
            </div>
        );
    }
});
