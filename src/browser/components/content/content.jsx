/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('../sidebar.jsx'),
    QuizContainer = require('../quiz/quiz_container.jsx'),
    Video = require('../video/video.jsx'),
    Audio = require('../audio/audio.jsx'),
    Login = require('../login.jsx'),
    CourseStore = require('../../stores/course.js'),
    bean = require('bean');

var Content = React.createClass({
    getInitialState: function() {
        return {
            activeContent: CourseStore.getActiveItem()
        };
    },

    componentDidMount: function() {
        bean.on(CourseStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(CourseStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        var activeContent = CourseStore.getActiveItem();

        this.setState({
            activeContent: activeContent
        });
    },

    render: function() {
        var component,
        activeContent = this.state.activeContent,
        activeContentType = activeContent && activeContent.type;

        console.log(activeContent);

        switch(activeContentType) {
            case "quiz":
                component = <QuizContainer />
                break;
            case "video":
                component = <Video item={activeContent} />
                break;
            case "audio":
                component = <Audio item={activeContent} />
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
