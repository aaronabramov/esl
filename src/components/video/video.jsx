/** @jsx React.DOM */

var React = require('react'),
    VideoStore = require('../../stores/video.js'),
    bean = require('bean');

var Video = React.createClass({
    getInitialState: function() {
        return {
            link: VideoStore.getLink() || ''
        };
    },

    componentDidMount: function() {
        bean.on(VideoStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(VideoStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        debugger;
        this.setState({
            link: VideoStore.getLink()
        });
    },

    render: function() {
        if(!this.state.link) {
            return null;
        }

        var html = '<video id="video" class="video-js vjs-default-skin"' +
                   ' controls preload="auto" width="640" height="264" data-setup=\'{"example_option":true}\'>' +
                   ' <source src=' + this.state.link + ' type="video/mp4" /></video>';
        return (
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        );
    }
});

module.exports = Video;
