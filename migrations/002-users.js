var pg = require('pg'),
    config = require('config'),
    dbUtils = require('../src/utils/db.js'),
    connString = dbUtils.connString(
        config.get('db.user'),
        config.get('db.host'),
        config.get('db.user')
    );

exports.up = function(next) {
    console.log(connString);
    var client = new pg.Client(connString);
    client.connect(function(err) {
        if (err) {
            throw err;
        }
        client.query('select 1', function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            next();
        });
    });
};

exports.down = function(next) {
    next();
};
