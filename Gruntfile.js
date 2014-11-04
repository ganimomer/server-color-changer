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
            all: ['test']
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.registerTask('default',['eslint', 'jasmine_node']);
};
