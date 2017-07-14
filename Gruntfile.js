module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
          unit: {
            configFile: 'karma.conf.js',
            background: true,
            singleRun: false,
            port: 9877
          },
          travis: {
            configFile: 'karma.conf.js',
            singleRun: true,
            reporters: ['progress', 'junit'],
            browsers: ['ChromeHeadless'],
            port: 9877
          }
        },
        watch: {
          karma: {
            files: [
              './src/test.ts'
            ],
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
