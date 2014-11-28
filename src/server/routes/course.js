var models = require('../models'),
    Promise = require('es6-promise').Promise,
    _ = require('lodash');

module.exports = function(req, res, next) {
    var user;
    Promise.all([
        getResults(req.user.id),
        getViews(req.user.id)
    ]).then(function(data) {

        if (req.user) {
            user = JSON.stringify(req.user);
        } else {
            user = JSON.stringify(null);
        }

        res.render('course', {
            currentUser: user,
            results: JSON.stringify(data[0]),
            views: JSON.stringify(data[1])
        });
    }).catch(next);
};

function getResults(userId) {
    return new Promise(function(resolve, reject) {
        models.quiz_results.findAll({
            where: {
                user_id: userId
            }
        }).success(function(results) {
            resolve(_.pluck(results, 'dataValues'));
        }).error(reject);
    });
}

function getViews(userId) {
    return new Promise(function(resolve, reject) {
        models.sequelize.query('select distinct content_id from views where user_id = ?', null, {
            raw: true
        }, [userId]).success(function(data) {
            resolve(_.pluck(data, 'content_id'));
        }).error(reject);
    })
}
