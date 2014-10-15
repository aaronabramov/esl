var models = require('../../../../models');

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        var id = user.user.id;
        done(null, id);
    });

    passport.deserializeUser(function(id, done) {
        models.users.find({
            where: {
                facebook_id: id
            }
        }).success(function(user) {
            done(null, user.dataValues);
        }).error(function(err) {
            done(err);
        });
    });
};
