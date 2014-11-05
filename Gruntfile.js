'use strict';

module.exports = function(grunt) {
    grunt.config.init({
        eslint: {
            src: ['*.js', 'src/**/*.js', '!src/public/js/lib/*.js', '!Gruntfile.js'],
            options: {
                config: '.eslintrc'
            }
        },
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                specNameMatcher: 'spec',
                extentions: 'js'
            },
            all: ['test/server']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default',['eslint', 'jasmine_node', 'karma']);
};
