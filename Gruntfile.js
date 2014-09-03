module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            express: {
                files: ['src/**/*.{js,jsx}', 'app.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: './run.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadTasks('./grunt-tasks');
    grunt.registerTask('server', ['express:dev', 'watch'])
};
