var React = require('react'),
    App = require('./components/app.jsx');

require('./actions/quiz_action_creator.js').initialize();

window.onload = function() {
    React.renderComponent(App(null), document.body);
};
