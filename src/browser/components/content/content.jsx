/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('../sidebar.jsx'),
    QuizContainer = require('../quiz/quiz_container.jsx'),
    VideoContainer = require('../video/video_container.jsx'),
    AudioContainer = require('../audio/audio_container.jsx'),
    Login = require('../login.jsx'),
    LessonStore = require('../../stores/lesson.js'),
    bean = require('bean');

var Content = React.createClass({
    getInitialState: function() {
        return {
            activeContent: LessonStore.getActiveLessonContent() || null
        };
    },

    componentDidMount: function() {
        bean.on(LessonStore, 'changed', this.handleChange);
    },

    componentWillUnmount: function() {
        bean.off(LessonStore, 'changed', this.handleChange);
    },

    handleChange: function() {
        var activeContent = LessonStore.getActiveLessonContent();

        this.setState({
            activeContent: activeContent
        });
    },

    render: function() {
        var component;

        switch(this.state.activeContent.type) {
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
