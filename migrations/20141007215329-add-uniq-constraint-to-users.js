var sequelize = require('../models').sequelize,
    UP = 'create unique index users_facebook_id on users (facebook_id)',
    DOWN = 'drop index users_facebook_id';


module.exports = {
    up: function(migration, DataTypes, done) {
        sequelize.query(UP).success(function(result) {
            done();
        }).error(function(err) {
            throw err;
        });
    },

    down: function(migration, DataTypes, done) {
        sequelize.query(DOWN).success(function(result) {
            done();
        }).error(function(err) {
            throw err;
        });
    }
};
