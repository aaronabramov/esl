var sequelize = require('../models').sequelize,
    QUERY = '' +
    'CREATE TABLE "session" (' +
    '"sid" varchar NOT NULL COLLATE "default",' +
    '"sess" json NOT NULL,' +
    '"expire" timestamp(6) NOT NULL' +
    ')' +
    'WITH (OIDS=FALSE);' +
    'ALTER TABLE "session" ADD CONSTRAINT "session_pkey"' +
    'PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;';

module.exports = {
    up: function(migration, DataTypes, done) {
        sequelize.query(QUERY).success(function(result) {
            console.log(result);
        }).error(function(err) {
            throw err;
        });
    },

    down: function(migration, DataTypes, done) {
        migration.dropTable('session').success(function() {
            done();
        }).error(function(err) {
            throw err;
        });
    }
};
