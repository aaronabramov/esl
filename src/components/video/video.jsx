/** @jsx React.DOM */

var React = require('react');

var Video = React.createClass({
    render: function() {
        return (
            <video id="video" className="video-js vjs-default-skin" controls preload="auto" width="640" height="264" data-setup='{"example_option":true}'>
                 <source src="https://esl-videos-alice.s3-us-west-1.amazonaws.com/beginner_1_4.mp4?AWSAccessKeyId=AKIAJ2ZJDCY6PIMCYNAQ&Expires=1412917941&Signature=t3qKsUyLyQoNf2PPFKtwlwp7z24%3D" type='video/mp4' />
            </video>
        );
    }
});

module.exports = Video;
