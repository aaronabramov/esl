var yaml = require('js-yaml'),
    fs = require('fs'),
    path = require('path');


module.exports = {
    /**
     * Load yaml data into javascript object
     *
     * @param {String} filename name of the yaml file that will be resolved to 'data/{filename}'
     * @return {Object} parsed yaml data
     */
    load: function(filename) {
        var filepath = path.resolve(__dirname, '../data/', filename),
            data = fs.readFileSync(filepath);
        return yaml.load(data);
    }
}
