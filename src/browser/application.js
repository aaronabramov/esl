var React = require('react'),
    App = require('./components/app.jsx');

require('./actions/course.js').initialize();

window.onload = function() {
    React.renderComponent(App(null), document.getElementById('container'));
};
