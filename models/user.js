module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        facebook_id: {
            type: DataTypes.STRING
        },
        display_name: {
            type: DataTypes.STRING
        }
    });
};
