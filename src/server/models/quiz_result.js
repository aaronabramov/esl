module.exports = function(sequelize, DataTypes) {
    return sequelize.define('quiz_results', {
        quiz_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        total_correct: {
            type: DataTypes.INTEGER
        }
    });
};
