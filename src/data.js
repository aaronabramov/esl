var glob = require('glob'),
    path = require('path'),
    fs = require('fs'),
    yaml = require('js-yaml'),
    utils = require('./utils.js'),
    DATA_DIR = path.resolve(__dirname, '../data'),
    data = {},
    files = glob.sync(path.join(DATA_DIR, '**/*.yml'));


files.forEach(function(file) {
    var rel = path.relative(DATA_DIR, file),
        doc = yaml.safeLoad(fs.readFileSync(file));

    rel = rel.replace(/\.yml$/i, '');
    utils.assocIn(data, rel, doc);
});

module.exports = data;
