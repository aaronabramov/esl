var FacebookStrategy = require('passport-facebook').Strategy,
    models = require('../../models'),
    config = require('config');

module.exports = function() {
    return new FacebookStrategy({
        clientID: 694688507292410,
        clientSecret: config.get('facebook.clientSecret'),
        callbackURL: "http://local.esl.com:3009/login/facebook/callback"
    }, function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        var id = profile.id,
            displayName = profile.displayName;

        models.users.findOrCreate({
            facebook_id: id
        }).success(function(user) {
            user.display_name = displayName;
            user.save().success(function() {
                done(null, {
                    user: profile
                });
            }).error(function(err) {
                done(err);
            });
        }).error(function(err) {
            done(err);
        });
    });
};
