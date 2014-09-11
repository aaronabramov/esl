var pg = require('pg'),
    connString = require('../src/utils/db.js').connString();

/**
 * @param {String} query SQL query
 * @param {Function} callback will be called with error if it occurs or with
 * (null, results) if query is successful
 *
 *
 * @example
 *
 * query = require('./db/query.js');
 * query('select 1', function(err, results) {
 *   console.log(results);
 * });
 */
module.exports = function(query, callback) {
    pg.connect(connString, function(err, client, done) {
        if (err) {
            return callback(err);
        }

        client.query(query, function(err, results) {
            done(); // release client to pool
            if (err) {
                return callback(err);
            }

            callback(null, results);
        });
    });
};
