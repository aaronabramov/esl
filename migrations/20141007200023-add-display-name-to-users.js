"use strict";

module.exports = {
    up: function(migration, DataTypes, done) {
        migration.addColumn(
            'users',
            'display_name',
            DataTypes.STRING
        ).success(function() {
            done();
        });
    },

    down: function(migration, DataTypes, done) {
        migration.removeColumn('users', 'display_name').success(function() {
            done();
        });
    }
};
