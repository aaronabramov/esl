require('node-jsx').install({
    extension: '.jsx'
})

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var fractal = require('fractaljs');
fractal.config().assetPath = path.resolve(__dirname);
app.use('/assets/*', fractal.middleware);

app.get('/questions/:filename', function(req, res) {
    var questions = require('./src/questions');
    res.send(questions.load(req.params.filename));
});

app.get('/*', function(req, res) {
    // var Page = require('./src/components/page.jsx');
    // var React = require('react');
    // var markup = '<!DOCTYPE html>\n' + React.renderComponentToString(Page(null));
    // res.end(markup);
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.writeHead(err.status || 500, {
        'Content-Type': 'application/json'
    });
    var stack = err.stack;
    stack && (stack = stack.split('\n'));
    res.end(JSON.stringify({
        msg: err.msg,
        err: err.toString(),
        stack: stack
    }));
});

module.exports = app;
