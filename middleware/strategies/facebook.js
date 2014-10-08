var FacebookStrategy = require('passport-facebook').Strategy,
    models = require('../../models');

module.exports = function() {
    return new FacebookStrategy({
        clientID: 694688507292410,
        clientSecret: '27517f681feb86c31a95de25cb06b118',
        callbackURL: "http://local.esl.com:3009/login/facebook/callback"
    }, function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        var id = profile.id,
            name = profile.name;

        models.users.create({facebook_id: id}).complete(function(err, user) {
            console.log(user);
            done(null, {'user': profile});
        });
    });
};
