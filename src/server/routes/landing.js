var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    templatePath = path.resolve(__dirname, '../views/landing/index.ejs'),
    file = fs.readFileSync(templatePath).toString(),
    tmpl = ejs.compile(file, {
        filename: templatePath
    });

module.exports = function(req, res) {
    var data = {
        loggedIn: !!req.user,
        user: req.user
    };
    res.write(tmpl({
        data: data
    }));
    res.end();
};
