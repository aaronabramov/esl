/**
 * Middleware that checks if user id is in the list of enabled users. If not
 * then it will throuw 'not authorized' error which prevents not authorized
 * users from accessing the course.
 *
 * FB user id api key dependent. Same user will have different id in
 * dev and production.
 */

ENABLED_USERS_DEV = [
        '10204961219574652', // Dmitrii Abramov
    ],
    ENABLED_USERS = ENABLED_USERS_DEV.concat([
        '10205312732642259' // Dmitrii Abramov
    ]);

module.exports = function(req, res, next) {
    console.log(~ENABLED_USERS.indexOf(req.user.facebook_id.toString()))
    if (!~ENABLED_USERS.indexOf(req.user.facebook_id.toString())) {
        next('Not Authorized. user_id: ' + req.user.facebook_id);
    } else {
        next();
    };

};
