/**
 * find current user object in database and save it to
 * req.currentUser
 */
var models = require('../models');

module.exports = function(req, res, next) {
    var currentUserId = req.session.currentUserId;
    req.currentUser = null;

    if (currentUserId) {
        models.users.find({
            where: {
                facebook_id: currentUserId
            }
        }).success(function(user) {
            req.currentUser = user;
            next();
        }).error(function(err) {
            console.error('cant find user with id: ' + currentUserId);
            next(err);
        });
    } else {
        next();
    }
};
