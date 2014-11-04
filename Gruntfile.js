'use strict';

module.exports = function(grunt) {
    grunt.config.init({
        eslint: {
            src: ['*.js', 'src/**/*.js', '!public/js/lib/*.js'],
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
                options: {
                    files: [
                        'src/public/js/lib/**/*.js',
                        'src/public/**/*.js',
                        'test/client/**/colorChanger.spec.js'
                    ],
                    browsers: ['PhantomJS'],
                    singleRun: true,
                    logLevel: 'ERROR',
                    frameworks: ['jasmine']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default',['eslint', 'jasmine_node']);
};
