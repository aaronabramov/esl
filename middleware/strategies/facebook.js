var FacebookStrategy = require('passport-facebook').Strategy,
    models = require('../../models'),
    config = require('config');

module.exports = function() {
    return new FacebookStrategy({
        clientID: 694688507292410,
        clientSecret: config.get('facebook.clientSecret'),
        callbackURL: "http://local.esl.com:3009/login/facebook/callback"
    }, function(accessToken, refreshToken, profile, done) {
        var id = profile.id,
            name = profile.name;

        models.users.create({
            facebook_id: id
        }).complete(function(err, user) {
            done(null, {
                'user': profile
            });
        });
    });
};
