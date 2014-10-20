/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('./sidebar.jsx'),
    QuizContainer = require('./quiz/quiz_container.jsx'),
    Login = require('./login.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div id="layout" className="pure-g">
                <Sidebar />
                <QuizContainer />
                <Login />
            </div>
        );
    }
});
