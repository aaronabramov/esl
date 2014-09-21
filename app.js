var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    app = express();

require('node-jsx').install({
    extension: '.jsx'
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'public')));

passport.use(new FacebookStrategy({
        clientID: 694688507292410,
        clientSecret: '27517f681feb86c31a95de25cb06b118',
        callbackURL: "http://local.esl.com:3009/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // console.log(profile);
        console.log('authentication done');
        done({user: 'user'});
    })
);

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        console.log('ooga booga');
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

app.get('/questions/:filename', function(req, res) {
    var questions = require('./src/questions');
    res.send(questions.load(req.params.filename));
});

app.post('/login', function(req, res) {
    res.send({success: 1});
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
