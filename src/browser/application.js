var React = require('react'),
    App = require('./components/app.jsx');

require('./actions/lesson_action_creator.js').initialize();

window.onload = function() {
    React.renderComponent(App(null), document.getElementById('container'));
};
