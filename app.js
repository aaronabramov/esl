var SERVER_SRC_DIR = './src/server',
    express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    session = require('express-session'),
    pgSession = require('connect-pg-simple')(session),
    Routes = require('./routes'),
    registerSession = require(SERVER_SRC_DIR + '/middleware/session'),
    Strategies = require(SERVER_SRC_DIR + '/middleware/strategies'),
    Errors = require(SERVER_SRC_DIR + '/middleware/errors'),
    pg = require('pg'),
    app = express(),
    config = require('./config/config.json')[app.get('env')];

require('node-jsx').install({
    extension: '.jsx'
});

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
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

app.use('/quiz', Routes.Quiz);
app.use('/login', Routes.Login(passport));
app.use('/lessons', Routes.Lesson);
app.post('/logout', Routes.Logout);
app.use('/video', Routes.Video);

app.get('/', function(req, res) {
    res.render('index', {
        currentUser: JSON.stringify(req.user)
    });
});

app.use(Errors.PageNotFound);
app.use(Errors.Handler);

module.exports = app;
