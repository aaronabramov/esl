/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('../sidebar.jsx'),
    QuizContainer = require('../quiz/quiz_container.jsx'),
    Login = require('../login.jsx');

var Content = React.createClass({
    render: function() {
        debugger;
        // use the application store / onclick of sidebar to change pages within app.jsx

        return (
            <div id="layout" className="pure-g">
                <Sidebar />
                <QuizContainer />
                <Login />
            </div>
        );
    }
});

module.exports = Content;
