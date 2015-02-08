// entry point
import Dispatcher from './dispatcher';
import App from './app.jsx';

var dispatcher = new Dispatcher();
var el = document.querySelector('.esl-app');

var app = new App({dispatcher, el});

app.initialize();
