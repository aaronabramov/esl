var models = require('../models'),
    Promise = require('es6-promise').Promise,
    path = require('path'),
    fs = require('fs'),
    ejs = require('ejs'),
    templatePath = path.resolve(__dirname, '../views/course2.ejs'),
    file = fs.readFileSync(templatePath).toString(),
    tmpl = ejs.compile(file, {
        filename: templatePath
    }),
    _ = require('lodash'),
    data = require('../utils/data.js'),
    serializer = require('../serializers/lesson.js'),
    LESSON_NUMBER_REGEX = /(\d+)/,
    cachedLessons;


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

        res.send(tmpl({
            data: {
                currentUser: user,
                results: data[0],
                views: data[1],
                lessons: getLessons()
            }
        }));
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

function getLessons() {
    if (!cachedLessons) {
        cachedLessons = data.get('lessons').map(serializer).toArray();
        cachedLessons = JSON.parse(JSON.stringify(cachedLessons)); // otherwise immutable data will mutate :)

        // Sort lessons by their names by parsing the name and getting the number out of it
        // 'Lesson 10' > 'Lesson 1'
        cachedLessons = cachedLessons.sort(function(a, b) {
            a = parseInt(LESSON_NUMBER_REGEX.exec(a.name)) || 0;
            b = parseInt(LESSON_NUMBER_REGEX.exec(b.name)) || 0;

            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
    return cachedLessons;
}
