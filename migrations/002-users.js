var query = require('../db/query.js');

exports.up = function(next) {
    var QUERY = '' +
        'create table users(' +
        '   id      serial      primary key     not null,' +
        '   name    varchar(255)                not null)';

    query(QUERY, function(err, results) {
        if (err) {
            throw err;
        }
        console.log(results);
        next();
    });
};

exports.down = function(next) {
    query('drop table users', function(err, results) {
        if (err) {
            throw err;
        }

        console.log(results);
        next();
    });
};
