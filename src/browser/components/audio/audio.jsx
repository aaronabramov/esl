/** @jsx React.DOM */

var React = require('react'),
    AudioStore = require('../../stores/audio.js'),
    bean = require('bean');

var Audio = React.createClass({
    getInitialState: function() {
        return {
            link: AudioStore.getLink() || ''
        };
    },

    componentDidMount: function() {
        bean.on(AudioStore, 'changed', this.handleChange);
        audiojs.createAll();
    },

    componentWillUnmount: function() {
        bean.off(AudioStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        this.setState({
            link: AudioStore.getLink()
        });
    },

    render: function() {
        if(!this.state.link) {
            return null;
        }

        var html = '<audio src=' + this.state.link + ' preload="auto" />';

        return (
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        );
    }
});

module.exports = Audio;
