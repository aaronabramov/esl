module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            express: {
                files: ['src/**/*.{js,jsx}'],
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
    grunt.registerTask('server', ['express:dev', 'watch'])
};
