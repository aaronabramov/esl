/** @jsx React.DOM */
var bean = require('bean'),
    React = require('react'),
    Video = require('../video/video.jsx');

var VideoContainer = React.createClass({
    render: function() {
        return (
            <div className="content pure-u-1 pure-u-md-3-4">
                <Video />
            </div>
        );
    }
});

module.exports = VideoContainer;
