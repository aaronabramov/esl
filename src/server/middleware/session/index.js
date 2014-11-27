var models = require('../../models'),
    Promise = require('es6-promise').Promise,
    _ = require('lodash');

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

    passport.deserializeUser(function(facebookId, done) {
        getUser(facebookId).then(function(user, results) {
            done(null, user);
        }).catch(done);
    });
};

function getUser(id) {
    return new Promise(function(resolve, reject) {
        models.users.find({
            where: {
                facebook_id: id
            }
        }).success(function(user) {
            resolve(user.dataValues);
        }).error(reject);
    });
}
