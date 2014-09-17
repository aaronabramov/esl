module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
            facebook_id: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            }
        }).complete(done);
    },
    down: function(migration, DataTypes, done) {
        migration.dropTable('users').complete(done);
    }
}
