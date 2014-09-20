module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            express: {
                files: ['src/**/*.{js,jsx}', 'app.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            },
            browserify: {
                files: ['src/**/*.{js,jsx}'],
                tasks: ['browserify:src']
            }
        },
        express: {
            dev: {
                options: {
                    script: './run.js'
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadTasks('./grunt-tasks');
    grunt.registerTask('default', ['express:dev', 'browserify', 'watch']);
    grunt.registerTask('test', ['mochaTest']);
};
