/** @jsx React.DOM */

var React = require('react');
var LevelTest = require('./level_test.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head></head>
                <body>
                    <LevelTest />
                </body>
            </html>
        );
    }
});
