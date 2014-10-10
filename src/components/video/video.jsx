/** @jsx React.DOM */

var React = require('react');

var Video = React.createClass({

    render: function() {
        var link = 'https://esl-videos-alice.s3-us-west-1.amazonaws.com/beginner_1_4.mp4?AWSAccessKeyId=AKIAJ2ZJDCY6PIMCYNAQ&Expires=1412926234&Signature=lFtei3NLG6nk4914hg%2BuAUuvoBg%3D',
            html = '<video id="video" class="video-js vjs-default-skin"' +
                   ' controls preload="auto" width="640" height="264" data-setup=\'{"example_option":true}\'>' +
                   ' <source src=' + link + ' type="video/mp4" /></video>';
        return (
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        );
    }
});

module.exports = Video;
