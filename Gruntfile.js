module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
          unit: {
            configFile: 'karma.conf.js',
            background: true
          },
          travis: {
            configFile: 'karma.conf.js',
            singleRun: true,
            browsers: ['PhantomJS']
          }
        },
        watch: {
          karma: {
            files: ['src/app/**/*.js', 'src/app/**/**/*.js'],
            tasks: ['karma:unit:run']
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('devmode', ['karma:unit', 'watch']);

    // Travis CI task
    grunt.registerTask('test', ['karma:travis'])
};
