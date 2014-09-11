/** @jsx React.DOM */
var React = require('react'),
    UserStore = require('../stores/user.js'),
    bean = require('bean');

var Login = React.createClass({
    getInitialState: function() {
        return {
            loggedIn: UserStore.getLoginStatus(),
            userName: UserStore.getUserName()
        };
    },

    componentDidMount: function() {
        bean.on(UserStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(UserStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        this.setState({
            loggedIn: UserStore.getLoginStatus(),
            userName: UserStore.getUserName()
        });
    },

    render: function() {
        var element;
        if(!this.state.loggedIn) {
            element = <button className="pure-button" onClick={this.checkLoginState}>Login</button>;
        } else {
            element = <span className="login-name">Hello, {this.state.userName}!</span>;
        }

        return (
            <div className="fb-login">
                {element}
            </div>
        );
    }
});

module.exports = Login;