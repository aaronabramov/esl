module.exports = function(sequelize, DataTypes) {
    return sequelize.define('views', {
        user_id: {
            type: DataTypes.INTEGER
        },
        content_id: {
            type: DataTypes.STRING
        }
    });
};
