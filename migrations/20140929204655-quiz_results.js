module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable('quiz_results', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            quiz_id: {
                type: DataTypes.INTEGER
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
            total_correct: {
                type: DataTypes.INTEGER
            }
        }).complete(done);
    },
    down: function(migration, DataTypes, done) {
        migration.dropTable('quiz_results').complete(done);
    }
};
