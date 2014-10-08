var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    registerSession = require('./middleware/session'),
    session = require('express-session'),
    pgSession = require('connect-pg-simple')(session),
    Routes = require('./routes'),
    Strategies = require('./middleware/strategies'),
    pg = require('pg'),
    app = express(),
    config = require('./config/config.json')[app.get('env')];

require('node-jsx').install({
    extension: '.jsx'
});

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


app.use(session({
    store: new pgSession({
        pg: pg,
        conString: 'postgres://' +
            config.username +
            ':' +
            config.password +
            '@' +
            config.host +
            '/' +
            config.database,
        tableName: 'session'
    }),
    secret: 'sharkhorse',
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
    } // 30 days
}));

app.use(session({
    store: new(require('connect-pg-simple')(session))(),
    secret: 'sharkhorse'
}));

app.use(passport.initialize());


app.use(passport.session());
passport.use(Strategies.Facebook());
registerSession(passport);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/quiz', Routes.Quiz);
app.use('/login', Routes.Login(passport));

app.get('/', function(req, res) {
    res.render('index', {
        currentUser: JSON.stringify(req.user)
    });
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
