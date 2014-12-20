/** @jsx React.DOM */
var React = require('react'),
    UserStore = require('../stores/user.js'),
    bean = require('bean'),
    LOGOUT_URL = '/logout';

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

    handleLogout: function(e) {
        e.preventDefault();
        superagent.post(LOGOUT_URL).end(function(err, res) {
            if (err) {
                throw err;
                return;
            }
            if (!res.ok) {
                return console.error(res.text);
            }
            window.location.reload();
        });
    },

    render: function() {
        var element;
        if(!this.state.loggedIn) {
            element = <button className="pure-button"><a href='login/facebook'>Login</a></button>;

        } else {
            element = <div>
                <span className="login-name">Hello, {this.state.userName}!</span>
                <button className="pure-button"><a onClick={this.handleLogout}>Logout</a></button>
            </div>;
        }

        return (
            <div className="fb-login">
                {element}
            </div>
        );
    }
});

module.exports = Login;
