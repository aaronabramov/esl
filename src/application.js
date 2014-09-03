var React = require('react'),
    App = require('./components/app.jsx');

require('./actions/questions_action_creator.js').initialize();

React.renderComponent(App(null), document.body);
