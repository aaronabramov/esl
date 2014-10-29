/** @jsx React.DOM */
var React = require('react'),
    Audio = require('../audio/audio.jsx');

var AudioContainer = React.createClass({
    render: function() {
        return (
            <div className="content pure-u-1 pure-u-md-3-4">
                <Audio />
            </div>
        );
    }
});

module.exports = AudioContainer;
