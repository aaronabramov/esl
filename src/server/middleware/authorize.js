/**
 * Middleware that checks if user id is in the list of enabled users. If not
 * then it will throuw 'not authorized' error which prevents not authorized
 * users from accessing the course.
 */

ENABLED_USERS = [
    '10204961219574652'
];

module.exports = function(req, res, next) {
    console.log(~ENABLED_USERS.indexOf(req.user.facebook_id.toString()))
    if (!~ENABLED_USERS.indexOf(req.user.facebook_id.toString())) {
        next('Not Authorized. user_id: ' + req.user.facebook_id);
    } else {
        next();
    };

};
