var express = require('express'),
    router = express.Router(),
    FacebookStrategy = require('passport-facebook').Strategy,
    models = require('../models');

module.exports = function(passport) {
    passport.use(new FacebookStrategy({
        clientID: 694688507292410,
        clientSecret: '27517f681feb86c31a95de25cb06b118',
        callbackURL: "http://local.esl.com:3009/login/facebook/callback"
    }, function(accessToken, refreshToken, profile, done) {
        var id = profile.id,
            name = profile.name;

        models.users.create({facebook_id: id}).complete(function(err, user) {
            console.log(user);
            done(null, {'user': profile});
        });
    }));

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
    router.get('/facebook', passport.authenticate('facebook'));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    router.get('/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/'); // Successful authentication, redirect home.
        }
    );

    return router;
};
