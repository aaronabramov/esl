var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    file = fs.readFileSync(path.resolve(__dirname, '../views/landing.ejs')).toString(),
    tmpl = ejs.compile(file);

module.exports = function(req, res) {
    res.write(tmpl());
    res.end();
};
