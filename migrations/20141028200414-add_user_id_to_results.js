var sequelize = require('../src/server/models').sequelize,
    UP = 'alter table quiz_results add column user_id integer not null',
    DOWN = 'alter table quiz_results drop column user_id';


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
