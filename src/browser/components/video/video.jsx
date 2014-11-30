/** @jsx React.DOM */

var React = require('react');

var Video = React.createClass({
    render: function() {
        var _this = this;

        // if link is not there yet or the id is different from what was there before
        // then make another request and get the link.
        if (!this.state || this.state.id !== this.props.item.id) {
            superagent.get('/s3/' + this.props.item.id).end(function(error, res) {
                if (error) {
                    throw error;
                }

                _this.setState({
                    id: _this.props.item.id,
                    link: res.body.link
                });
            });

            return null;
        }

        var html = '<video id="video" class="video-js vjs-default-skin"' +
                   ' controls preload="auto" width="640" height="264" data-setup=\'{"example_option":true}\'>' +
                   ' <source src=' + this.state.link + ' type="video/mp4" /></video>';
        return (
            <div className="content pure-u-1 pure-u-md-3-4">
                <div dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        );
    }
});

module.exports = Video;
