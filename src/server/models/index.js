var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    _ = require('lodash'),
    env = process.env.NODE_ENV || 'development',
    config = require(path.resolve(__dirname + '/../../../config/config.json'))[env],
    sequelize = new Sequelize(config.database, config.username, config.password, config),
    db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = _.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);
