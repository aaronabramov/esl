var config = require('config'),
    exec = require('child_process').exec;

exports.up = function(next) {
    var cmd = 'echo "create database ' +
        config.get('database_name') +
        ';" | psql';
    exec(cmd, function(err, stdout, stderr) {
        if (err) {
            throw err;
        }
        console.log(stdout, stderr);
        next();
    });
};

exports.down = function(next) {
    var cmd = 'echo "drop database ' +
        config.get('database_name') +
        ';" | psql';
    cmd = 'ls';
    exec(cmd, function(err, stdout, stderr) {
        if (err) {
            throw err;
        }
        console.log(stdout, stderr);
        next();
    });
};
