exports.up = function(next) {
    console.log('up');
    next();
};

exports.down = function(next) {
    console.log('down');
    next();
};
