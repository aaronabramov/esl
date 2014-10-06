var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    registerSession = require('./middleware/session'),
    Routes = require('./routes'),
    Strategies = require('./middleware/strategies'),
    app = express();

require('node-jsx').install({
    extension: '.jsx'
});

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
passport.use(Strategies.Facebook());
registerSession(passport);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/quiz', Routes.Quiz);
app.use('/login', Routes.Login(passport));

app.get('/', function(req, res){
    res.render('index', {});
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
