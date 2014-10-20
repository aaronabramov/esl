/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('../sidebar.jsx'),
    QuizContainer = require('../quiz/quiz_container.jsx'),
    Login = require('../login.jsx'),
    ApplicationStore = require('../../stores/application.js'),
    bean = require('bean');

var Content = React.createClass({
    getInitialState: function() {
        return {
            activePage: {
                type: 'quiz'
            }
        };
    },

    componentDidMount: function() {
        bean.on(ApplicationStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(ApplicationStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        var activePage = ApplicationStore.getActivePage();

        this.setState({
            activePage: activePage
        });
    },

    render: function() {
        var component;

        switch(this.state.activePage.type) {
            case "quiz":
                component = <QuizContainer />
                break;
            case "video":
                component = <VideoContainer />
                break;
            case "audio":
                component = <AudioContainer />
                break;
            default:
                component = null;
                break;
        }

        return (
            <div id="layout" className="pure-g">
                <Sidebar />
                {component}
                <Login />
            </div>
        );
    }
});

module.exports = Content;
