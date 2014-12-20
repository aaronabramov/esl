var React = require('react'),
    App = require('./components/app.jsx');

require('./actions/course.js').initialize();

window.onload = () => {
    React.renderComponent(App(null), document.getElementById('container'));
};
