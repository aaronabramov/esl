/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="sidebar pure-u-1 pure-u-md-1-4">
                <div className="header">
                    <h1 className="brand-title">ESL Test</h1>
                    <h2 className="brand-tagline">See how well you know English!</h2>
                </div>
            </div>
        );
    }
});
