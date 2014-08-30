var app = require('./app.js'),
    DEFAULT_PORT = 3009;
app.listen(DEFAULT_PORT, function() {
    console.log('listening for connection on port ' + DEFAULT_PORT);
});
