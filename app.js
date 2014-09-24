var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    models = require('./models'),
    app = express();

require('node-jsx').install({
    extension: '.jsx'
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

passport.use(new FacebookStrategy({
        clientID: 694688507292410,
        clientSecret: '27517f681feb86c31a95de25cb06b118',
        callbackURL: "http://local.esl.com:3009/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        var id = profile.id,
            name = profile.name;

        models.users.create({facebook_id: id}).complete(function(err, user) {
            console.log(user);
            done(null, {'user': profile});
        });
    })
);

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

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
