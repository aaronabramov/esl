var browserify = require('browserify'),
    fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    through = require('through'),
    react = require('react-tools'),
    _ = require('lodash'),
    SRC_ENTRY_FILE = path.resolve(process.cwd(), 'src/application.js'),
    ASSETS_DIR = path.resolve(process.cwd(), 'public/js'),
    LIBS_FILE = path.resolve(ASSETS_DIR, 'their_stuff.js'),
    SRC_FILE = path.resolve(ASSETS_DIR, 'our_stuff.js'),
    LIBS = [
        'lodash',
        'react',
        'bean'
    ];

/**
 * grunt browserify => bundles all libs and source
 * grunt browesrify:src => bundles only source
 */
module.exports = function(grunt) {
    mkdirp.sync(ASSETS_DIR);

    grunt.registerTask('browserify', function() {
        var done = _.after(2, this.async());
        this.flags.src ? done() : bundleLibs(grunt, done);
        bundleSrc(grunt, done)
    });
};

function bundleLibs(grunt, done) {
    var b = browserify(),
        s = fs.createWriteStream(LIBS_FILE, {
            flags: 'w'
        });

    LIBS.forEach(function(pkgName) {
        b.require(pkgName, {
            expose: pkgName
        });
    });

    b.bundle().pipe(s);

    s.on('error', function(err) {
        throw err;
    });

    s.on('finish', function() {
        grunt.log.ok('their stuff is bundled >> ' + LIBS_FILE);
        done();
    });
};

function bundleSrc(grunt, done) {
    var b = browserify(),
        s = fs.createWriteStream(SRC_FILE, {
            flags: 'w'
        });

    transformJsx(b);

    LIBS.forEach(function(pkgName) {
        b.external(pkgName);
    });

    b.add(SRC_ENTRY_FILE);

    b.bundle().pipe(s);

    s.on('error', function(err) {
        throw err;
    });

    s.on('finish', function() {
        grunt.log.ok('our stuff is bundled >> ' + SRC_FILE);
        done();
    });
}

function transformJsx(b) {
    b.transform({
        global: true
    }, function(filename) {
        var isJsx = !!filename.match(/\.jsx$/);
        if (isJsx) {
            var data = '',
                write = function(buff) {
                    data += buff;
                },
                end = function() {
                    this.queue(react.transform(data));
                    this.queue(null);
                };
            return through(write, end);
        } else {
            return through();
        }
    });
};
