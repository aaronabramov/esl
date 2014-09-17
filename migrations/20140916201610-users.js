module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
            facebook_id: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }).complete(done);
    },
    down: function(migration, DataTypes, done) {
        migration.dropTable('users').complete(done);
    }
}
