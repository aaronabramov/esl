var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    file = fs.readFileSync(path.resolve(__dirname, '../views/landing.ejs')).toString(),
    tmpl = ejs.compile(file);

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
