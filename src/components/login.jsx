/** @jsx React.DOM */
var React = require('react');

var Login = React.createClass({
    statusChangeCallback: function(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            console.log('success!');
        } else if (response.status === 'not_authorized') {
        } else {
        }
    },

    checkLoginState: function() {
        var _this = this;
        FB.getLoginStatus(function(response) {
            _this.statusChangeCallback(response);
        });
    },

    render: function() {
        return (
            <div className="fb-login">
                <button className="pure-button" onClick={this.checkLoginState}>Login</button>
            </div>
        );
    }
});

module.exports = Login;
